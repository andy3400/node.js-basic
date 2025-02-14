const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactmodel');

const getAllContacts = asyncHandler ( async (req, res) => {
    const contacts = await Contact.find();
    const users = [
        {name: 'John', email: 'john@example.com', phone: '010-1234-5678'},
        {name: 'Alice', email: 'alice@example.com', phone: '010-9876-5432'},
        {name: 'Bob', email: 'bob@example.com', phone: '010-4567-8901'},
    ]
    res.render('getAll', {users : users});

});

const createContract = asyncHandler ( async (req, res) => {
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

const getContact = asyncHandler ( async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    res.send(contact);
});

const updateContact = asyncHandler( async (req, res) => {
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

const deleteContact = asyncHandler( async (req, res) => {
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

