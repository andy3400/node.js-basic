const mongoose = require('mongoose');

const schema =  mongoose.createSchema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
        required: [true, "please, enter your phone number"]
    }
},
{
    timestamps: true,
})

// 스키마 -> 모델
// mongoose.model("모델명", "스키마명")
const contact = mongoose.model('Contact', schema);

module.exports = contact;