const express = require("express");
const router = express.Router();

router.route("/phonebook")
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

router.route("/phonebook/:id")
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

module.exports = router;