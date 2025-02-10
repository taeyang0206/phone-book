const express = require("express");

const app = express();
const router = express.Router();

app.get("/", (req, res) =>
{
    res.send("Hello Node");
});

router.route("/Phonebook")
    .get((req, res) =>
    {
        // 전체 연락처 가져오기
        res.send("All imformation");
    })
    .post((req, res) =>
    {
        //연락처 생성하기
        res.send("Create imformation");
    });

router.route("/Phonebook/:id")
    .get((req, res) =>
    {
        // 특정 연락처 가져오기
        res.send(`View ${req.params.id} imformation`)
    })
    .put((req, res) =>
    {
        // 특정 연락처 수정하기
        res.send(`update ${req.params.id} imformation`)
    })
    .delete((req, res) =>
    {
        // 특정 연락처 삭제하기
        res.send(`Delete ${req.params.id} imformation`)
    });

// router 미들웨어를 사용했다는 것을 알려줌
app.use(router);

app.listen(3000, () => 
{
    console.log("서버가 성공적으로 실행하고 있습니다.");
});