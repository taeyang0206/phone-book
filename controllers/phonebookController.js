// 어떠한 기능을 처리할건지 확인

//asyncHandler : 에러를 체크해주는 모듈 
const asyncHandler = require("express-async-handler");
const Number = require("../models/phoneModels");

// 모든 전화번호 가져오기
const getAllNumber = asyncHandler(async (req, res) =>
{
    const numbers = await Number.find();
    res.render("index", { numbers : numbers });
}); 

// 추가하는 폼 보여주기
const addNumberForm = (req, res) =>
{
    res.render("add");
}

// 전화번호 추가하기
const addNumber = asyncHandler(async (req, res) =>
{
    const { name, email, phone } = req.body;
    if(!name || !email || !phone)
    {
        return res.send("필수 입력 값이 비어있습니다.");
    }

    const number = await Number.create(
        {
            name, email, phone
        }
    );
    res.send("Create imformation");
});

// 특정 전화번호 가져오기
const getNumber = asyncHandler(async (req, res) =>
{
    const number = await Number.findById(req.params.id);
    
    if(number === null)
    {
        throw new Error("not found target");
    }
    res.render("update", { number : number });
});

// 특정 연락처 수정하기
const updateNumber = asyncHandler(async (req, res) =>
{
    const id = req.params.id;
    const { name, email, phone } = req.body;

    const target = await Number.findById(id);
    
    if(!target)
    {
        throw new Error("can't find target");
    }

    target.name = name;
    target.email = email;
    target.phone = phone;
    
    target.save();

    res.redirect("/phonebook");
});

// 특정 연락처 삭제하기기
const deleteNumber = asyncHandler(async (req, res) =>
{
    const id = req.params.id;
    
    const target = await Number.findByIdAndDelete(id);

    res.redirect("/phonebook");
})

module.exports = { 
    getAllNumber, 
    addNumberForm, 
    addNumber, 
    getNumber, 
    updateNumber, 
    deleteNumber 
};