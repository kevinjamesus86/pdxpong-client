module.exports = {
    dev: {
        files: [{
            src: 'dist/app.js',
            dest: 'dist/app.js'
        }],
        options: {
            patterns: [{
                match: 'apiBase',
                replace: 'http://localhost:3000/'
            }]
        }
    },
    prod: {
        files: [{
            src: 'dist/app.js',
            dest: 'dist/app.js'
        }],
        options: {
            patterns: [{
                match: 'apiBase',
                replace: 'https://pdxpong-api.herokuapp.com/'
            }]
        }
    }
};
