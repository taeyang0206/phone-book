const express = require("express");
const router = express.Router();

const
{
    getLogin,
    loginUser,
    getSignin,
    registerUser
}= require("../controllers/loginController");

router.route("/")
    .get(getLogin)
    .post(loginUser);

router.route("/register")
    .get(getSignin)
    .post(registerUser)
module.exports = router;