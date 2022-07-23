const express = require('express')
const cors = require('cors');
const StudentListInfo = require('./Routes/StudentListInfo')
const BookListInfo = require('./Routes/BookListInfo')
const app = express();
const port = 9000;


app.use(cors());
app.use('/StudentListInfo', StudentListInfo)
app.use('/BookListInfo', BookListInfo)
app.listen(port, ()=>{
    console.log(`login listening on ${port}`);
})