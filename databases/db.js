const firebase = require('./firebase');
const postgres = require('./postgres');

require('dotenv').config()

switch (process.env.DATA_PROVIDER) {
    case 'postgres':
        module.exports = postgres;
        break;
    case 'firebase':
        module.exports = firebase;
        break;
    default:
        throw `The data provider ${process.env.DATA_PROVIDER} is not supported`;
}
