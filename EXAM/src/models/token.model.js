const mongoose = require("mongoose");

const TokenSchema = new mongoose.Schema(
    {
        token: {
            type: String,
            trim: true,
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "user",
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const token = mongoose.model("token" , TokenSchema);
module.exports = token;