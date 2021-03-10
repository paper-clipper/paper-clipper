const { In } = require('typeorm')
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

    async findLike(query = {})  {
        const queryResults = await this.clipsRepository.createQueryBuilder('clip')
            .leftJoinAndSelect('clip.tags', 'tags')
            .leftJoinAndSelect('clip.files', 'files')
            .where('clip.name like :name', { name: `%${query.name}%` })
            .orWhere('tags.name like :tag', { tag: `%${query.tag}%` })
            .orWhere('files.extension like :extension', { extension: `%${query.extension}%`})
            .getMany()

        return this.clipsRepository.find({
            where: {
                id: In(queryResults.map(clip => clip.id)),
            },
            relations: ['files', 'tags'],
        })
    },

})
