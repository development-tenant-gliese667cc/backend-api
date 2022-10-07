const { push, ref, set, child, get } = require('firebase/database');
const database = require('../connections/firebase');

exports.order = {
    create: async (data) => {
        const orderKey = push(child(ref(database), 'orders')).key;

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
