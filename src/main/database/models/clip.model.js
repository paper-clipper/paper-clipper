
class Clip {

    constructor({ id, name, files, tags, createdAt, updatedAt } = {}) {

        this.id = id
        this.name = name
        this.files = files,
        this.tags = tags,
        this.createdAt = createdAt
        this.updatedAt = updatedAt

    }

}

module.exports = Clip
