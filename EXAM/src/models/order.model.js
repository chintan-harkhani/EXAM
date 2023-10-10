const mongoose = require("mongoose");
//Order model schema defiend
const OrderSchema = new mongoose.Schema(
    {
        product :{
            type: mongoose.Types.ObjectId,
            ref: "product",
        },
        order_date: {
            type: String,
            trim: true,
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "user",
        },
        total_price: {
            type: Number,
            trim: true,
        },
        shipping_address: {
            type: String,
            trim: true,
        },
        order_status: {
            type: Boolean,
            default: true
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);
const Order = mongoose.model("order", OrderSchema);
module.exports = Order;