const { DataTypes } = require("sequelize");
const connection = require("../connections/postgres");

exports.DELIVERY_OPTIONS = {
  DELIVER_TO_DOOR: "deliver to door",
  PICK_UP_OUTSIDE: "pick up outside",
};

exports.Order = connection.define(
  "Order",
  {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      get() {
        const orderId =
          "#" + this.getDataValue("id").toUpperCase().replace(/-/g, "");
        return orderId;
      },
    },

    location: {
      type: DataTypes.STRING,
    },

    apt: {
      type: DataTypes.STRING,
    },

    deliveryOption: {
      type: DataTypes.STRING,
    },

    deliveryNote: {
      type: DataTypes.TEXT,
    },

    orderDate: {
      type: DataTypes.DATE,
    },

    deliveryDate: {
      type: DataTypes.DATE,
    },

    quantity: {
      type: DataTypes.INTEGER,
    },

    orderNote: {
      type: DataTypes.TEXT,
    },

    cardId: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);
