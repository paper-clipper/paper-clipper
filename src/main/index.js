// main.js

'use strict'

// Import parts of electron to use
const { app, shell, ipcMain, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
const { connectToDatabase, getTagsService, getFilesService, getPaperClippersService } = require('./database')

// Add React extension for development
const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

// Keep a reference for dev mode
let dev = false

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
		width: 1080, // width of the window
		height: 608, // height of the window
        show: false, // don't show until window is ready
        transparent: true,
        frame: false,
        titleBarStyle: 'hiddenInset',
		webPreferences: {
            nodeIntegration: true,
		},
	})

	// and load the index.html of the app.
	let indexPath

	// Determine the correct index.html file
	// (created by webpack) to load in dev and production
	if (dev && process.argv.indexOf('--noDevServer') === -1)
		indexPath = url.format({
			protocol: 'http:',
			host: 'localhost:8080',
			pathname: 'index.html',
			slashes: true,
		})
	else
		indexPath = url.format({
			protocol: 'file:',
			pathname: path.join(__dirname, 'dist', 'index.html'),
			slashes: true,
		})


	// Load the index.html
	mainWindow.loadURL(indexPath)

	// Don't show the app window until it is ready and loaded
	mainWindow.once('ready-to-show', () => {
		mainWindow.show()

		// Open the DevTools automatically if developing
		if (dev) {
			installExtension(REACT_DEVELOPER_TOOLS)
				.catch(err => console.log('Error loading React DevTools: ', err))
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
    await connectToDatabase()
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

    const tagsService = getTagsService()
    const filesService = getFilesService()
    const paperClippersService = getPaperClippersService()

    const tags = await Promise.all(
        clip.tags.map(tag => tagsService.create({ name: tag }))
    )

    const files = await Promise.all(
        clip.files.map(file => filesService.create(file))
    )

    return paperClippersService.create({
        ...clip,
        tags,
        files,
    })

})

ipcMain.handle('fetch-clips', (event, query) => {
    const paperClippersService = getPaperClippersService()
    return paperClippersService.find(query)
})

ipcMain.handle('fetch-clips-like', (event, query) => {
    const paperClippersService = getPaperClippersService()
    return paperClippersService.findLike(query)
})

ipcMain.handle('open-files', (event, files) => {
    return Promise.all(files.map(file => shell.openPath(file.path)))
})
