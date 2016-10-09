'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function combineLoaders(...loaders) {
    return loaders.map(v => v.loader + '?' + JSON.stringify(v.query)).join('!');
}

const jsLoader = {
    test: /\.js$/,
    loader: 'babel',
    query: {
        ast: false,
        compact: false,
        comments: true,
        cacheDirectory: './.tmp/pack',
        presets: ['es2015']
    }
};

const ngHtmlLoader = {
    test: /\.html$/,
    loader: combineLoaders(jsLoader, {
        loader: 'ng-html-loader',
        query: {
            htmlmin: {
                sortAttributes: true,
                decodeEntities: true,
                removeComments: true,
                removeOptionalTags: true,
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                removeAttributeQuotes: true,
                collapseBooleanAttributes: true,
                removeRedundantAttributes: true
            }
        }
    })
};

const lessLoader = {
    test: /\.less$/,
    loader: ExtractTextPlugin.extract(['css', 'less'])
};

const fontLoader = {
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    loader: 'file?name=app/public/fonts/[name].[ext]'
};

module.exports = {
    dist: {
        entry: {
            app: './app/main',
            vendor: [
                'angular',
                'angular-animate',
                'angular-sanitize',
                'angular-ui-router'
            ]
        },
        output: {
            path: './dist',
            filename: '[name].js'
        },
        module: {
            loaders: [
                jsLoader,
                lessLoader,
                ngHtmlLoader,
                fontLoader
            ]
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
            new ExtractTextPlugin('style.css')
        ]
    }
};
