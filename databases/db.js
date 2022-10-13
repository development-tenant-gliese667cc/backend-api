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
    case 'firestore':
        const firestore = require('./firestore');
        module.exports = firestore;
        break;
    case 'all':
        // This option is broken. No longer use it
        const all = require('./all');
        module.exports = all;
        break;
    default:
        throw `The data provider ${process.env.DATA_PROVIDER} is not supported`;
}
