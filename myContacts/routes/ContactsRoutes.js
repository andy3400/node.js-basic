const express = require('express');
const router = express.Router();

const app = express();
app.use(express.json());
app.use(express.urlencoded({exteneded:true}));

router.route('/contacts')
    .get((req, res) => {
        res.send('Hello World!!!!!')})
    .post((req, res) => {
        console.log(req.body);
        // 구조 분해 할당 구문
        const {name , age, address} = req.body;
        if(!name || !age || !address){
            return res.send("please enter the value")
        }

        res.send('POST request received')});

router.route(`/contacts/:id`)
    .get((req, res) => {
        res.send(`${req.params.id} is the first contacts`)})
    .put((req, res) => {
        res.send(`${req.params.id}로 변경되었습니다.`)})
    .delete((req, res) => {
        res.send(`${req.params.id} is deleted.`)});

module.exports = router;