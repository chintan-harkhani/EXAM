const joi =require("joi");


const CreateProduct =  {
    body : joi.object().keys({
        product_name : joi.string().trim().required(),
        product_description : joi.string().trim().required(),
        product_img : joi.string().trim().required(),
        stock : joi.number().integer().required(),
        product_price : joi.number().integer().required(),
    })
}

module.exports = {
    CreateProduct
}