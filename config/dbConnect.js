// mongodb 접속 모듈
const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async() => 
{
    try
    {
        // await : 해당 요청을 수행하고 다음으로 넘어가라라
        const connect = await mongoose.connect(process.env.DB_CONNECT);
        console.log("DB Connected");
    }
    catch(err)
    {
        console.log(err);
    }
}

module.exports = dbConnect;