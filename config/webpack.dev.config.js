const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { spawn } = require('child_process')

// Any directories you will be adding code/files into, need to be added to this array so webpack will pick them up
const defaultInclude = path.join(__dirname, '../src/renderer')

module.exports = {
    entry: path.join(defaultInclude, 'index.js'),
    resolve: {
        alias: {
            '@paper': defaultInclude,
            '@paper-ui/theme': path.join(__dirname, '../src/renderer/ui/theme'),
            '@paper-ui/mixin': path.join(__dirname, '../src/renderer/ui/mixin'),
            '@paper-ui': path.join(__dirname, '../src/renderer/ui'),
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
            },
            {
                test: /\.(js|jsx)$/,
                use: [{ loader: 'babel-loader' }],
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [{ loader: 'file-loader?name=img/[name]__[hash:base64:5].[ext]' }],
                include: defaultInclude,
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [{ loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]' }],
                include: defaultInclude,
            },
        ],
    },
    target: 'electron-renderer',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Paper Clipper',
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
    ],
    devtool: 'cheap-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        stats: {
            colors: true,
            chunks: false,
            children: false,
        },
        before() {
            spawn(
                'electron',
                ['.'],
                { shell: true, env: process.env, stdio: 'inherit' }
            )
                .on('close', () => process.exit(0))
                .on('error', spawnError => console.error(spawnError))
        },
    },
}
