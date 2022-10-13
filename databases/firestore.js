const { addDoc, collection, getDocs } = require('firebase/firestore');
const database = require('../connections/firestore');

exports.order = {
    create: async (data) => {
        return addDoc(collection(database, 'orders'), JSON.parse(JSON.stringify(data)))
            .then((docRef) => {
                data.id = docRef.id;
                return data;
            });
    },

    findAll: async () => {
        return getDocs(collection(database, 'orders'))
            .then((snapshot) => {
                let orders = [];

                snapshot.forEach((doc) => {
                    const order = doc.data();
                    order.id = doc.id;
                    orders.push(order);
                });

                return orders.reverse();
            });
    },
};
