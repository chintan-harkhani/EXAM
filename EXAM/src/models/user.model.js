const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        user_name: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
        },
        password: {
            type: String,
            trim: true,
        },
        role: {
            type: String,
            default: "User"
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
)
const user = mongoose.model("user", UserSchema);
module.exports = user;