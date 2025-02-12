const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username:
        {
            type: String,
            required: true,
        },
        userid:
        {
            type: String,
            required: true,
            unique: true,
        },
        useremail:
        {
            type: String,
            required: true,
            unique: true,
        },
        userphone:
        {
            type: String,
            required: true,
            unique: true,
        },
        userpassword:
        {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("User", userSchema);

module.exports = User;