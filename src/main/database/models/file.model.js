
class File {

    constructor({ id, name, path, createdAt, updatedAt } = {}) {

        this.id = id
        this.name = name
        this.path = path
        this.createdAt = createdAt
        this.updatedAt = updatedAt

    }

}

module.exports = File
