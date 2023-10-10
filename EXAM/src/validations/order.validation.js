const joi =require("joi");


const CreateOrder =  {
    body : joi.object().keys({
        product : joi.string().trim().required(),
        order_date : joi.string().trim().required(),
        user : joi.string().email().trim().required(),
        total_price  : joi.number().integer().required(),
        shipping_address  : joi.string().min(4).max(14).trim().required()
    })
}

module.exports = {
    CreateOrder
}