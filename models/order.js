const { DataTypes } = require('sequelize');
const connection = require('../connections/postgres');

const DELIVERY_OPTIONS = {
    DELIVER_TO_DOOR: 'deliver to door',
    PICK_UP_OUTSIDE: 'pick up outside'
}

const Order = connection.define('Order', {
    id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        get() {
            const orderId = '#' + this.getDataValue('id').toUpperCase().replace(/-/g, '');
            return orderId;
        }
    },

    location: {
        type: DataTypes.STRING,
        allowNull: false
    },

    apt: {
        type: DataTypes.STRING,
        allowNull: false
    },

    deliveryOption: {
        type: DataTypes.STRING,
        allowNull: false
    },

    deliveryNote: {
        type: DataTypes.TEXT
    },

    orderDate: {
        type: DataTypes.DATE,
        allowNull: false
    },

    deliveryDate: {
        type: DataTypes.DATE,
        allowNull: false
    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    orderNote: {
        type: DataTypes.TEXT
    },

    cardId: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = { DELIVERY_OPTIONS, Order }
