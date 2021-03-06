const path = require('path')

module.exports = {
    resolve: {
        alias: {
            '@paper': path.join(__dirname, '../src/renderer'),
            '@paper-ui/theme': path.join(__dirname, '../src/renderer/ui/theme'),
            '@paper-ui/mixin': path.join(__dirname, '../src/renderer/ui/mixin'),
            '@paper-ui': path.join(__dirname, '../src/renderer/ui'),
        },
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom',
    },
}
