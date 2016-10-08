module.exports = {
    options: {
        livereload: true,
    },
    js: {
        files: 'app/**/*.js',
        tasks: [
            'eslint',
            'webpack',
            'uglify'
        ]
    },
    splat: {
        files: 'index.html',
        options: {
            reload: true
        }
    }
};
