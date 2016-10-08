'use strict';

function combineLoaders(...loaders) {
    return loaders.map(v => v.loader + '?' + JSON.stringify(v.query)).join('!');
}

const jsLoader = {
    test: /\.js$/,
    loader: 'babel',
    query: {
        ast: false,
        compact: false,
        comments: false,
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

module.exports = {
    dist: {
        entry: './app/main',
        output: {
            path: './dist',
            filename: 'pdxpong.js'
        },
        module: {
            loaders: [
                jsLoader,
                ngHtmlLoader
            ]
        }
    }
};
