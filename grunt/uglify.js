module.exports = {
    options: {
        sourceMap: true,
        nameCache: './.tmp/mangle'
    },
    app: {
        files: {
            'dist/app.min.js': 'dist/app.js'
        }
    },
    vendor: {
        files: {
            'dist/vendor.min.js': 'dist/vendor.js'
        }
    }
};
