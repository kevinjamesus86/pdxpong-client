'use strict';

const html5 = require('connect-history-api-fallback');
const log = require('connect-logger');

module.exports = {
    server: {
        options: {
            open: true,
            livereload: true,
            base: ['.','app/public'],
            middleware(connect, opt, wares) {
                return wares.concat(
                    log({ format: '%date %status %method %url' }),
                    html5({
                        index: '/index.html',
                        htmlAcceptHeaders: ['text/html']
                    })
                );
            }
        }
    }
};
