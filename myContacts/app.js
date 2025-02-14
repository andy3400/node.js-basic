const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express();

dbConnect();

app.set("view engine", "ejs")
app.set("views", "./views")

// 정적 파일 제공
app.use(express.static("./public"));

// JSON 및 URL-encoded 데이터 파싱 미들웨어를 먼저 등록
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 기본 라우트
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

// 라우트 설정
app.use("/contacts", require('./routes/ContactsRoutes'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});