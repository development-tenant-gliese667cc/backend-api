const { Order } = require("../models/Order");

exports.create = (req, res, next) => {
    const { location, apt, deliveryOption, deliveryNote, deliveryDate,
        quantity, orderNote, cardId } = req.body;
    const orderDate = new Date();

    Order.create({
        location,
        apt,
        deliveryNote,
        deliveryOption,
        deliveryDate,
        quantity,
        orderNote,
        cardId,
        orderDate
    })
        .then((order) => {
            res.status(201).json({ orderId: order.id, deliveryDate: deliveryDate });
        })
        .catch(error => {
            res.status(400).json({ message: 'Failed to save the order' });
        });
}

exports.list = (req, res, next) => {
    Order.findAll({
        order: [['orderDate', 'DESC']]
    })
        .then(orders => {
            res.status(200).json({ orders });
        })
        .catch(error => {
            res.status(500).json({ message: 'Got an unexpected error' });
        })
}
