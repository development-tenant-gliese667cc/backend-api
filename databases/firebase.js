const { ref, set, child, get } = require('firebase/database');
const { v4: uuidv4 } = require('uuid');
const database = require('../connections/firebase');

exports.order = {
    create: async (data) => {
        const orderKey = data.id || uuidv4();
        
        return set(ref(database, 'orders/' + orderKey), JSON.parse(JSON.stringify(data)))
            .then(async () => {
                return get(child(ref(database), 'orders/' + orderKey))
                    .then(snapshot => {
                        let order = snapshot.val();
                        order.id = orderKey;

                        return order;
                    });
            });
    },

    findAll: () => get(child(ref(database), 'orders'))
                    .then(snapshot => {
                        let orders = [];

                        for (key in snapshot.val()) {
                            const order = snapshot.val()[key];
                            order.id = key;
                            orders.push(order);
                        }
                        
                        return orders.reverse();
                    })
}
