module.exports = {
    options: {
        livereload: true,
    },
    js: {
        files: 'app/**/*.js',
        tasks: [
            'eslint',
            'webpack',
            'replace:dev',
            'uglify'
        ]
    },
    less: {
        files: 'app/**/*.less',
        tasks: [
            'webpack',
            'replace:dev'
        ]
    },
    nghtml: {
        files: 'app/src/**/*.html',
        tasks: [
            'webpack',
            'replace:dev',
            'uglify'
        ]
    },
    index: {
        files: 'app/index.html',
        tasks: ['copy:index']
    }
};
