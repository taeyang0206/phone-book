// 경로와 요청 방식만 확인
const express = require("express");
const router = express.Router();
const 
{ 
    getAllNumber, 
    addNumber, 
    getNumber, 
    updateNumber, 
    deleteNumber 
} = require("../controllers/phonebookController");

router.route("/phonebook")
    .get(getAllNumber)
    .post(addNumber);

router.route("/phonebook/:id")
    .get(getNumber)
    .put(updateNumber)
    .delete(deleteNumber);

module.exports = router;