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
    less: {
        files: 'app/**/*.less',
        tasks: ['webpack']
    },
    nghtml: {
        files: 'app/src/**/*.html',
        tasks: [
            'webpack',
            'uglify'
        ]
    },
    index: {
        files: 'app/index.html',
        tasks: ['copy:index']
    }
};
