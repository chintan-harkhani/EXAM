const mongoose = require("mongoose");
const config = require("../config/config")

const ProductSchema = new mongoose.Schema(
    {
        product_name: {
            type: String,
            trim: true,
        },
        product_description: {
            type: String,
            trim: true,
        },
        product_img: {
            type: String,
            trim: true,
        },
        product_price: {
            type: Number,
            trim: true,
        },
        stock: {
            type: Number,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true
        },
    },
    {
        timestamps: true,
        versionKey: false,
        toJSON :{
            transform : function (doc , data){
                   if(data?.product_img){
                    data.product_img = `${config.base_url}Images/${data.product_img}`;
                   }
            }
        }
    },
);
const Product = mongoose.model("product", ProductSchema);
module.exports = Product;