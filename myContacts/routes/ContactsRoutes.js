const express = require('express');
const router = express.Router();
const {getAllContacts, createContract } = require('../controllers/contactController');

router
    .route('/')
    .get(getAllContacts)
    .post(createContract);

router.route(`/:id`)
    .get((req, res) => {
        res.send(`${req.params.id} is the first contacts`)})
    .put((req, res) => {
        res.send(`${req.params.id}로 변경되었습니다.`)})
    .delete((req, res) => {
        res.send(`${req.params.id} is deleted.`)});

module.exports = router;