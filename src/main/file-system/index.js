const fs = require('fs')
const path = require('path')
const { homedir } = require('os')

export const fileExists = (file) =>
    fs.promises.access(file)
        .then(() => true)
        .catch(() => false)

export const createFile = (dir, file) => {
    const dirPath = path.join(homedir(), dir)
    const filePath = path.join(dirPath, file)
    return fs.promises.mkdir(dirPath, { recursive: true })
        .then(() => fs.promises.writeFile(filePath, ''))
        .then(() => filePath)
}
