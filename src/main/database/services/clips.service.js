const { Like } = require('typeorm')
const ClipSchema = require('../entities/clip.schema')
const Clip = require('../models/clip.model')

module.exports = connection => ({

    clipsRepository: connection.getRepository(ClipSchema),

    create(clip) {
        return this.clipsRepository.save(
            this.clipsRepository.create(new Clip(clip))
        )
    },

    updateOne(clip) {
        return this.clipsRepository.save(clip)
    },

    deleteOne(query) {
        return this.clipsRepository.delete(query)
    },

    findOne(query) {
        return this.clipsRepository.findOne(query)
    },

    find(query = {}) {
        return this.clipsRepository.find({
            ...query,
            relations: [ 'files', 'tags' ],
        })
    },

    findLike(query = {}) {
        return this.clipsRepository.find({
            where: {
                name: Like(`%${query.name}%`),
            },
            relations: [ 'files', 'tags' ],
        })
    },

})
