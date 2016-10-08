module.exports = {
    options: {
        livereload: true,
    },
    js: {
        files: 'app/**/*.js',
        tasks: ['eslint', 'webpack']
    }
};
