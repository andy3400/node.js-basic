const mongoose = require('mongoose');

const contactschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
        required: [true, "비밀번호를 입력해주세요."]
    }
},
{
    timestamps: true,
})

// 스키마 -> 모델
// mongoose.model("모델명", "스키마명")
const Contact = mongoose.model('Contact', contactschema);

module.exports = Contact;