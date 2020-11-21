const { EntitySchema } = require('typeorm')
const Tag = require('../models/tag.model')

module.exports = new EntitySchema({
    name: 'Tag',
    tableName: 'tags',
    target: Tag,
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
})
