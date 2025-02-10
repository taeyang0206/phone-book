// 어떠한 기능을 처리할건지 확인

//asyncHandler : 에러를 체크해주는 모듈 
const asyncHandler = require("express-async-handler");

// 모든 전화번호 가져오기
const getAllNumber = asyncHandler(async (req, res) =>
{
    res.send("All Imformation");
}); 

// 전화번호 추가하기
const addNumber = asyncHandler(async (req, res) =>
{
    console.log(req.body);
    const { name, email, phone } = req.body;
    if(!name || !email || !phone)
    {
        return res.send("필수 입력 값이 비어있습니다.");
    }
    res.send("Create imformation");
});

// 특정 전화번호 가져오기
const getNumber = asyncHandler(async (req, res) =>
{
    res.send(`View ${req.params.id} imformation`);
});

// 특정 연락처 수정하기
const updateNumber = asyncHandler(async (req, res) =>
{
    res.send(`update ${req.params.id} imformation`);
})

// 특정 연락처 삭제하기기
const deleteNumber = asyncHandler(async (req, res) =>
{
    res.send(`Delete ${req.params.id} imformation`);
})

module.exports = { getAllNumber, addNumber, getNumber, updateNumber, deleteNumber };