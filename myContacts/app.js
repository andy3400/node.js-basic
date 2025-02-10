const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express();

dbConnect();

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.use(express.json());
app.use(express.urlencoded({exteneded:true}));

app.use("/",require('./routes/ContactsRoutes'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})