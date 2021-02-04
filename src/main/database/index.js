const path = require('path')
const { createConnection, getConnection } = require('typeorm')
const filesService = require('./services/files.service')
const clipsService = require('./services/clips.service')
const tagsService = require('./services/tags.service')

module.exports = {

    connectToDatabase: () =>
        createConnection({
            name: 'default',
            type: 'sqlite',
            synchronize: true,
            database: path.join(__dirname, 'database.sqlite'),
            entities: [
                require('./entities/tag.schema'),
                require('./entities/file.schema'),
                require('./entities/clip.schema'),
            ],
            logging: true,
        }),

    getTagsService: () => tagsService(getConnection()),

    getFilesService: () => filesService(getConnection()),

    getClipsService: () => clipsService(getConnection()),

}
