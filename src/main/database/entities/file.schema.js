const { EntitySchema } = require('typeorm')
const File = require('../models/file.model')

module.exports = new EntitySchema({
    name: 'File',
    tableName: 'files',
    target: File,
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true,
            nullable: false,
        },
        name: {
            type: 'varchar',
            nullable: false,
        },
        extension: {
            type: 'varchar',
            nullable: false,
        },
        path: {
            type: 'varchar',
            nullable: false,
        },
        createdAt: {
            type: 'datetime',
            name: 'created_at',
            createDate: true,
        },
        updatedAt: {
            type: 'datetime',
            name: 'updated_at',
            updateDate: true,
        },
    },
})
