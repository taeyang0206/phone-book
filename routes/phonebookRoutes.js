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

router.route("/")
    .get(getAllNumber)

router.route("/add")
    .get(addNumberForm)
    .post(addNumber);


router.route("/:id")
    .get(getNumber)
    .put(updateNumber)
    .delete(deleteNumber);

module.exports = router;