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
    html: {
        files: 'app/**/*.html',
        tasks: [
            'webpack'
        ]
    },
    less: {
        files: 'app/**/*.less',
        tasks: [
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
