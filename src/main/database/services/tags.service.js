const TagSchema = require('../entities/tag.schema')
const Tag = require('../models/tag.model')

module.exports = connection => ({

    tagsRepository: connection.getRepository(TagSchema),

    async create(tag) {
        return this.tagsRepository.save(
            this.tagsRepository.create(new Tag(tag))
        )
    },

    async findOne(query) {
        return this.tagsRepository.findOne(query)
    },

})
