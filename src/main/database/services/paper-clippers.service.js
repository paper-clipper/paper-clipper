const PaperClipSchema = require('../entities/paper-clip.schema')
const PaperClip = require('../models/paper-clip.model')

module.exports = connection => ({

    paperClippersRepository: connection.getRepository(PaperClipSchema),

    create(paperClip) {
        return this.paperClippersRepository.save(
            this.paperClippersRepository.create(new PaperClip(paperClip))
        )
    },

    findOne(query) {
        return this.paperClippersRepository.findOne(query)
    },

    find(query = {}) {
        return this.paperClippersRepository.find({
            ...query,
            relations: [ 'files', 'tags' ],
        })
    },

})
