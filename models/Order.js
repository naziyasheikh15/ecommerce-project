const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

  userName: String,

  email: String,

  products: Array,

  totalAmount: Number,

  orderDate: {
    type: Date,
    default: Date.now
  }

});

module.exports =
mongoose.model("Order", orderSchema);