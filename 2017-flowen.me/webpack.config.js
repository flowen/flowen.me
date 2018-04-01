const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeEnv = process.env.NODE_ENV || 'production';
const HappyPack = require('happypack');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    devtool: 'source-map',
    // entry: ['./src/index.js', './src/scss/main.scss'],
    entry: ['./src/index.js'],
    output: {
        filename: './app/index.min.js'
    },
    resolve: {
        alias: {
           handlebars: 'handlebars/dist/handlebars.min.js'
        }
    },
    module: {
        rules: [
        {
            // loader: 'babel-loader',
            loader: 'happypack/loader',
            test: /\.js$/,
            exclude: /node_modules/,
            options: {
                presets: [
                    ['es2015', { 'modules': false }]
                ]
            }
        }//, 
        // {
        //     test: /\.css$/,
        //     use: ExtractTextPlugin.extract({
        //         use: 'css-loader?importLoaders=1'
        //     })
        // }, 
        // {
        //     test: /\.scss$/,
        //     use: ExtractTextPlugin.extract({
        //         fallback: 'style-loader',
        //         // url = false https://github.com/webpack-contrib/css-loader/issues/256
        //         use: ['css-loader?sourceMap&url=false', 'sass-loader?sourceMap&url=false '],
        //         publicPath: '/app'
        //     })
        // }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'proccess.env': { NODE_ENV: JSON.stringify(nodeEnv) }
        }),
        new HappyPack({
            loaders: [ 'babel-loader?presets[]=es2015' ]
        }),
        new WebpackNotifierPlugin({excludeWarnings: true, alwaysNotify: true}),
        // new ExtractTextPlugin({
        //     filename: './app/main.css',
        //     disable: false,
        //     allChunks: true
        // }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            output: { comments: false },
            sourceMap: true
        })
    ]
}
