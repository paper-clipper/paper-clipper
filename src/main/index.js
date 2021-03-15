// main.js

'use strict'

// Import parts of electron to use
const { app, shell, ipcMain, BrowserWindow } = require('electron')
const path = require('path')
const { homedir } = require('os')
const url = require('url')
const { connectToDatabase, getTagsService, getClipsService } = require('./database')
const { fileExists, createFile } = require('./file-system')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

// Keep a reference for dev mode
let dev = false

const HOME_DIR = '.paper-clipper'
const DATABASE_FILE = 'data.sqlite'
const DATABASE_PATH = path.join(homedir(), HOME_DIR, DATABASE_FILE)

// Determine the mode (dev or production)
if (process.defaultApp || /[\\/]electron-prebuilt[\\/]/.test(process.execPath) || /[\\/]electron[\\/]/.test(process.execPath))
	dev = true

// Temporary fix for broken high-dpi scale factor on Windows (125% scaling)
// info: https://github.com/electron/electron/issues/9691
// if (process.platform === 'win32') {
//     app.commandLine.appendSwitch('high-dpi-support', 'true')
//     app.commandLine.appendSwitch('force-device-scale-factor', '1')
// }

function createWindow () {
	// Create the browser window.
	mainWindow = new BrowserWindow({
		width: 1120, // width of the window
		height: 608, // height of the window
        show: false, // don't show until window is ready
        transparent: process.platform !== 'win32', // On Windows transparent: true causes window to not be resizable
        resizable: true,
        frame: process.platform !== 'darwin',
        titleBarStyle: 'hiddenInset',
		webPreferences: {
            nodeIntegration: true,
            webSecurity: false,
		},
	})

	// and load the index.html of the app.
    let indexPath

	// Determine the correct index.html file
	// (created by webpack) to load in dev and production
	if (dev && process.argv.indexOf('--noDevServer') === -1)
		indexPath = url.format({
			protocol: 'http:',
			host: `${process.env.ELECTRON_WEBPACK_WDS_HOST}:${process.env.ELECTRON_WEBPACK_WDS_PORT}`,
			pathname: 'index.html',
			slashes: true,
		})
	else
		indexPath = url.format({
			protocol: 'file:',
			pathname: path.join(__dirname, 'index.html'),
			slashes: true,
		})


	// Load the index.html
	mainWindow.loadURL(indexPath)

    // Hide menu when on windows/linux
    if (process.platform !== 'darwin') {
        mainWindow.setMenu(null)
    }

	// Don't show the app window until it is ready and loaded
	mainWindow.once('ready-to-show', () => {
		mainWindow.show()

		// Open the DevTools automatically if developing
		if (dev) {
			mainWindow.webContents.openDevTools()
		}
	})

	// Emitted when the window is closed.
	mainWindow.on('closed', function () {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null
    })

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
    const databasePath = await fileExists(DATABASE_PATH)
        .then(exists => exists ? DATABASE_PATH : createFile(HOME_DIR, DATABASE_FILE))
    await connectToDatabase(databasePath)
    createWindow()
})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
	// On macOS it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin')
		app.quit()

})

app.on('activate', () => {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (mainWindow === null)
		createWindow()

})

ipcMain.handle('create-clip', async (event, clip) => {
    const clipsService = getClipsService()
    return clipsService.create(clip)

})

ipcMain.handle('update-clip', (event, clip) => {
    const clipsService = getClipsService()
    return clipsService.updateOne(clip)
})

ipcMain.handle('delete-clip', (event, clip) => {
    const clipsService = getClipsService()
    return clipsService.deleteOne(clip)
})

ipcMain.handle('fetch-clips', (event, query) => {
    const clipsService = getClipsService()
    return clipsService.find(query)
})

ipcMain.handle('fetch-clips-like', (event, query) => {
    const clipsService = getClipsService()
    return clipsService.findLike(query)
})

ipcMain.handle('fetch-tags-like', (event, query) => {
    const tagsService = getTagsService()
    return tagsService.findLike(query)
})

ipcMain.handle('open-files', (event, files) => {
    return Promise.all(files.map(file => shell.openPath(file.path)))
})
