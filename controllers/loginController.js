const asyncHandler = require("express-async-handler");

// 첫 화면(로그인 페이지 연결)
const getLogin = (req, res) =>
{
    res.render("home");
};

const loginUser = asyncHandler(async (req, res) =>
{
    const { userId, password } = req.body;
});

const getSignin = (req, res) =>
{
    res.render("register");
};

module.exports = { getLogin, loginUser, getSignin };