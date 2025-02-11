// 경로와 요청 방식만 확인
const express = require("express");
const router = express.Router();
const 
{ 
    getAllNumber, 
    addNumberForm,
    addNumber, 
    getNumber, 
    updateNumber, 
    deleteNumber 
} = require("../controllers/phonebookController");

router.route("/phonebook")
    .get(getAllNumber)

router.route("/phonebook/add")
    .get(addNumberForm)
    .post(addNumber);


router.route("/phonebook/:id")
    .get(getNumber)
    .put(updateNumber)
    .delete(deleteNumber);

module.exports = router;