const config = require('@epoint-mrc/em-cli');
const options = process.env.NODE_ENV === 'production' ? config.build : config.dev;

module.exports = options;
