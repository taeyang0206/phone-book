const express = require("express");

const app = express();

app.get("/", (req, res) =>
{
    res.send("Hello Node");
});

// 전체 연락처 가져오기
app.get("/contacts", (req, res) =>
{
    res.send("Contects Page");
});

// 특정 연락처 가져오기
app.get("/contacts/:id", (req, res) =>
{
    res.send(`View Imformation for ID : ${req.params.id}`)
})
// 새로운 연락처 등록하기
app.post("/contacts", (req, res) =>
{
    res.send("Create Contacts");
});

// 특정 연락처 수정하기
app.put("/contacts/:id", (req, res) =>
{
    res.send(`Update Imformation for ID : ${req.params.id}`);
});

// 특정 연락처 삭제하기
app.delete("/contacts/:id", (req, res) =>
{
    res.send(`Delete Imformation for ID : ${req.params.id}`);
});

app.listen(3000, () => 
{
    console.log("서버가 성공적으로 실행하고 있습니다.");
});