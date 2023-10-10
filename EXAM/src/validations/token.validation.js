const joi = require("joi");

const Createtoken = {
    body:joi.object({
        user : joi.string().trim().required(),
    }),
};
module.exports = {
    Createtoken
}