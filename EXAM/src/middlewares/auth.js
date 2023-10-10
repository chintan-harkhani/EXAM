const jwt = require("jsonwebtoken");
const {UserModel} = require("../models");
const config = require("../config/config");

const auth = () => async (req, res, next) => {
    try {
        const TOken = req.headers.authorization;
        if (!TOken) {
            return next(res.status(401).json({
                success: false,
                message: "Authentication...."
            }));
        }
        const decoded = jwt.verify(
            TOken.replace("Bearer ", ""),
            config.jwt.secret_key
        )
        if (!decoded) {
            return next(new Error("Please valid Token !"));
        }
        const users = await UserModel.findOne({ _id: decoded.user });
        if (!users) {
            return next(new Error(" Authenticate ..."));
        }
        req.user = users;
        next();
    }catch(error){
        return next(new Error(error));
    }
}

module.exports = auth;