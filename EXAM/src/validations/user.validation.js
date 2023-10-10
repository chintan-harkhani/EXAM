const joi =require("joi");


const CreateUser =  {
    body : joi.object().keys({
        user_name : joi.string().trim().required(),
        email : joi.string().email().trim().required(),
        password  : joi.string().min(4).max(14).trim().required()
    })
}

module.exports = {
    CreateUser
}