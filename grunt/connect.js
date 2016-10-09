'use strict';

const html5 = require('connect-history-api-fallback');
const log = require('connect-logger');

module.exports = {
    server: {
        options: {
            open: true,
            livereload: true,
            base: 'dist',
            middleware(connect, opt, wares) {
                const logger = log({ format: '%date %status %method %url' });
                const html5rewriter = html5();
                return [logger, html5rewriter, ...wares];
            }
        }
    }
};
