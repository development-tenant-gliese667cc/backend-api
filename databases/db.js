const firebase = require('./firebase');
const postgres = require('./postgres');
const all = require('./all');

require('dotenv').config()

switch (process.env.DATA_PROVIDER) {
    case 'postgres':
        module.exports = postgres;
        break;
    case 'firebase':
        module.exports = firebase;
        break;
    case 'all':
        module.exports = all;
        break;
    default:
        throw `The data provider ${process.env.DATA_PROVIDER} is not supported`;
}
