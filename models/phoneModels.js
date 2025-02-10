const mongoose = require("mongoose");

const phoneSchema = new mongoose.Schema(
    {
        name:
        {
            type: String,
            required: [true, "이름은 필수 입력 항목입니다."] // required : Not Null 항목
        },
        email:
        {
            type: String,
        },
        phoneSchema:
        {
            type: String,
            required: [true, "이름은 필수 입력 항목입니다다."]
        }
    },
    {
        timestamps: true // 자료의 작성 또는 수정의 시간을 자동으로 기록
    }
)

// 스카마를 모델로 변환
const Phone = mongoose.model("Phone", phoneSchema);

module.exports = Phone;