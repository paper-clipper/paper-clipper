const PaperClipSchema = require('../entities/paper-clip.schema')
const PaperClip = require('../models/paper-clip.model')

module.exports = connection => ({

    paperClippersRepository: connection.getRepository(PaperClipSchema),

    async create(paperClip) {
        return this.paperClippersRepository.save(
            this.paperClippersRepository.create(new PaperClip(paperClip))
        )
    },

    async findOne(query) {
        return this.paperClippersRepository.findOne(query)
    },

})
