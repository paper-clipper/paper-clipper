const { Like } = require('typeorm')
const TagSchema = require('../entities/tag.schema')
const Tag = require('../models/tag.model')

module.exports = connection => ({

    tagsRepository: connection.getRepository(TagSchema),

    create(tag) {
        return this.tagsRepository.save(
            this.tagsRepository.create(new Tag(tag))
        )
    },

    findOne(query) {
        return this.tagsRepository.findOne(query)
    },

    findLike({ limit = 5, ...query } = {}) {
        return this.tagsRepository.find({
            where: {
                name: Like(`%${query.name || ''}%`),
            },
            take: limit,
        })
    },

})
