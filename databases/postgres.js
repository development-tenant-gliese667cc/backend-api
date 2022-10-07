const { Order } = require("../models/order");

exports.order = {
    create: (data) => Order.create(data),

    findAll: () => Order.findAll({
        order: [['orderDate', 'DESC']]
    })
}
