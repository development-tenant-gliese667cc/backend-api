const postgresDB = require('./postgres');
const firebaseDB = require('./firebase');
const firestoreDB = require('./firestore');

exports.order = {
    create: async (data) => {
        let order = {};
        
        order = await postgresDB.order.create(data);
        firebaseDB.order.create(order);
        firestoreDB.order.create(order);

        return order;
    },

    findAll: async () => {
        const firebaseOrders = await firebaseDB.order.findAll();
        const postgresOrders = await postgresDB.order.findAll();
        const firestoreOrders = await firestoreDB.order.findAll();

        return [... new Set([
            ...firebaseOrders,
            ...postgresOrders,
            ...firestoreOrders,
        ])];
    }
}