const asyncHandler = require("express-async-handler");
const User = require("../models/userModels");
const bcrypt = require("bcrypt");

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

const registerUser = asyncHandler(async (req, res) =>
{
    const { username, userid, useremail, userphone, userpassword } = req.body;
    // 사용자 비밀번호 해시 암호화
    const hashedPassword = await bcrypt.hash(userpassword, 10);

    const user = await User.create({username, userid, useremail, userphone, userpassword: hashedPassword });
    
    res.json(user);
})

module.exports = { getLogin, loginUser, getSignin, registerUser };