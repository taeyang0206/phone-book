const express = require("express");

const app = express();

app.get("/", (req, res) =>
{
    res.send("Hello Node");
});

// 분리된 route를 가져와서 사용한다는 선언
app.use("/", require("./routes/phonebookRoutes"));

app.listen(3000, () => 
{
    console.log("서버가 성공적으로 실행하고 있습니다.");
});