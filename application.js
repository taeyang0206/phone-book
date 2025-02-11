const express = require("express");
const dbConnect = require("./config/dbConnect");

const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static('./public'));

dbConnect();

app.get("/", (req, res) =>
{
    res.render("index");
    res.send("Hello Node");
});

// json, url 바디파서를 사용한다는 선언
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 분리된 route를 가져와서 사용한다는 선언
app.use("/", require("./routes/phonebookRoutes"));

app.listen(3000, () => 
{
    console.log("서버가 성공적으로 실행하고 있습니다.");
});