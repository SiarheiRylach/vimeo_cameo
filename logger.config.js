const log4js = require('log4js');

log4js.configure({
    appenders: {
        combined: { type: 'file', filename: `run_Log_${new Date().toUTCString()}.log` },
        console: { type: 'console'}
    },
    categories: { default: { appenders: ['combined', 'console'], level: 'debug' } }
});

const logger = log4js.getLogger('combined');

module.exports = {
    logger
};