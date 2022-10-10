require('dotenv').config();

switch (process.env.DATA_PROVIDER) {
    case 'postgres':
        const postgres = require('./postgres');
        module.exports = postgres;
        break;
    case 'firebase':
        const firebase = require('./firebase');
        module.exports = firebase;
        break;
    case 'all':
        const all = require('./all');
        module.exports = all;
        break;
    default:
        throw `The data provider ${process.env.DATA_PROVIDER} is not supported`;
}
