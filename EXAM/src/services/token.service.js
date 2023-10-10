const jwt = require("jsonwebtoken");
const config = require("../config/config");
const { TokenModel } = require("../models");

const Createtoken = async (reqBody) => {
    let payload = {
        ...reqBody,
    };
    return jwt.sign(payload, config.jwt.secret_key);
};

// save token
const Savetoken = async (reqBody) => {
    return TokenModel.findOneAndUpdate({ user: reqBody.user }, { $set: { ...reqBody }, }, { new: true, upsert: true });
};

module.exports = {
    Createtoken,
    Savetoken
}