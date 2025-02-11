const asynchandler = require('express-async-handler');
const Contact = require('../models/contactmodel');

const getAllContacts = asynchandler ( async (req, res) => {
    const contacts = await Contact.find();
    console.log(contacts);
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

const getContact = asynchandler ( async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    res.send(contact);
});

const updateContact = asynchandler( async (req, res) => {
    const id = req.params.id;
    const {name, email,phone} = req.body;
    const contact = await Contact.findById(id);
    if(!contact){
        return res.status(404).send('Contact not found');
    }

    contact.name = name;
    contact.email = email;
    contact.phone = phone;

    contact.save();
});

const deleteContact = asynchandler( async (req, res) => {
    try {
        const id = req.params.id;
        const contact = await Contact.findByIdAndDelete(id);
        if (!contact) {
            return res.status(404).send('Contact not found');
        }
        res.send('Contact deleted');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = {getAllContacts, createContract, getContact, updateContact, deleteContact}

