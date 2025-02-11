const asynchandler = require('express-async-handler');

const getAllContacts = asynchandler ( async (req, res) => {
    res.send("Contract Page");
});

const createContract = asynchandler ( async (req, res) => {
    console.log(req.body);
    // 구조 분해 할당 구문
    const {name , age, address} = req.body;
    if(!name || !age || !address){
        return res.send("please enter the value")
    }

    res.send('POST request received')

});

module.exports = {getAllContacts, createContract}

