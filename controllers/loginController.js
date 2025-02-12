const asyncHandler = require("express-async-handler");
const User = require("../models/userModels");
const bcrypt = require("bcrypt");

// JWT 사용을 위해 환경변수로 지정해놓은 .env 파일을 가져옴
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

// 첫 화면(로그인 페이지 연결)
const getLogin = (req, res) =>
{
    res.render("home");
};

const loginUser = asyncHandler(async (req, res) =>
{
    const { userid, userpassword } = req.body;

    const user = await User.findOne({ userid });
    if(!user)
    {
        return res.json({ message: '일치하는 사용자가 없습니다.' });
    }

    const isMatch = await bcrypt.compare(userpassword, user.userpassword);

    if(!isMatch)
    {
        return res.json({ message: '잘못된 비밀번호입니다.' });
    }

    // db에 저장된 사용자의 고유 Id를 토큰으로 만들고 내 서버에서 발급한지 알 수 있도록 비밀키도 같이 넣어준다
    const token = jwt.sign({ id: user._id }, jwtSecret);

    // res.cookie("이름", 저장할 내용, 옵션(hpptOnly: true -> http 프로토콜을 통해서만 접속 허용))
    res.cookie("token", token, {httpOnly: true});
    
    res.redirect("/phonebook");
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