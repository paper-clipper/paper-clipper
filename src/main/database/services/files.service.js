const FileSchema = require('../entities/file.schema')
const File = require('../models/file.model')

module.exports = connection => ({

    filesRepository: connection.getRepository(FileSchema),

    async create(file) {
        return this.filesRepository.save(
            this.filesRepository.create(new File(file))
        )
    },

    async findOne(query) {
        return this.filesRepository.findOne(query)
    },

})
