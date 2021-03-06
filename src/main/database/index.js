const { createConnection, getConnection } = require('typeorm')
const filesService = require('./services/files.service')
const clipsService = require('./services/clips.service')
const tagsService = require('./services/tags.service')

module.exports = {

    connectToDatabase: (databasePath) =>
        createConnection({
            name: 'default',
            type: 'sqlite',
            synchronize: true,
            database: databasePath,
            entities: [
                require('./entities/tag.schema'),
                require('./entities/file.schema'),
                require('./entities/clip.schema'),
            ],
        }),

    getTagsService: () => tagsService(getConnection()),

    getFilesService: () => filesService(getConnection()),

    getClipsService: () => clipsService(getConnection()),

}
