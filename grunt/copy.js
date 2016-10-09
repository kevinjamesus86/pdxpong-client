module.exports = {
    index: {
        src: 'app/index.html',
        dest: 'dist/index.html'
    },
    rootAssets: {
        src: 'app/public/*',
        expand:true,
        dest: 'dist/',
        filter: 'isFile',
        flatten: true
    },
    fonts: {
        src: 'app/public/fonts/**/*',
        expand:true,
        dest: 'dist/fonts/',
        filter: 'isFile',
        flatten: true
    },
    images: {
        src: 'app/public/images/**/*',
        expand:true,
        dest: 'dist/images/',
        filter: 'isFile',
        flatten: true
    }
};
