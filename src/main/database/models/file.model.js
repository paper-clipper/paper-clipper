
class File {

    constructor({
        id,
        name,
        path,
        extension,
        createdAt,
        updatedAt,
    } = {}) {

        this.id = id
        this.name = name
        this.extension = extension
        this.path = path
        this.createdAt = createdAt
        this.updatedAt = updatedAt

    }

}

module.exports = File
