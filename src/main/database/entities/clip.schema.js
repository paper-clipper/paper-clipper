const { EntitySchema } = require('typeorm')
const Clip = require('../models/clip.model')

module.exports = new EntitySchema({
    name: 'Clip',
    tableName: 'clips',
    target: Clip,
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
    relations: {
        files: {
            target: 'File',
            type: 'many-to-many',
            joinTable: true,
            cascade: true,
        },
        tags: {
            target: 'Tag',
            type: 'many-to-many',
            joinTable: true,
            cascade: true,
        },
    },
})
