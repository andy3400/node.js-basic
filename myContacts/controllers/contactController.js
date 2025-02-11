const asynchandler = require('express-async-handler');
const Contact = require('../models/contactmodel');

const getAllContacts = asynchandler ( async (req, res) => {
    res.send("Contract Page");
});

const createContract = asynchandler ( async (req, res) => {
    // console.log(req.body);
    // 구조 분해 할당 구문
    const {name , email, phone} = req.body;
    if(!name || !email || !phone){
        return res.send("please enter the value")
    }

    const contact = await Contact.create({
        name,
        email,
        phone
    });

    res.send('POST request received')

});



module.exports = {getAllContacts, createContract}

