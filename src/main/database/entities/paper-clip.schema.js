const { EntitySchema } = require('typeorm')
const PaperClip = require('../models/paper-clip.model')

module.exports = new EntitySchema({
    name: 'PaperClip',
    tableName: 'paper_clips',
    target: PaperClip,
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
            type: 'one-to-many',
            joinTable: true,
            cascade: true,
        },
        tags: {
            target: 'Tag',
            type: 'one-to-many',
            joinTable: true,
            cascade: true,
        },
    },
})
