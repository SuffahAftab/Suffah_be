const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const router = express.Router();

BookInfo = [
    {"bname" : "Fundamentals of programming",
    "author" : "Ross",
    "borrowedBy" : ["Ali Hamza", "Suffah Aftab"],
    "borrowDate" : ["18/07/2022","15/07/2022"],
    "expDate" : ["28/07/2022", "25/07/2022"]},
    {"bname" : "Clean Code",
    "author" : "Robert",
    "borrowedBy" : ["Leena Oxford"],
    "borrowDate" : ["20/07/2022"],
    "expDate" : ["30/07/2022"]},
    {"bname" : "The pragmatic programmer",
    "author" : "Dave",
    "borrowedBy" : ["Ali Hamza", "Faizan Asif"],
    "borrowDate" : ["20/07/2022", "16/07/2022"],
    "expDate" : ["30/07/2022", "26/07/2022"]},
    {"bname" : "Intoduction to algorithm",
    "author" : "Cormen",
    "borrowedBy" : ["Ali Hamza", "Leena Oxford"],
    "borrowDate" : ["10/07/2022", "13/07/2022"],
    "expDate" : ["20/07/2022", "23/07/2022"]},  
]
    
router.use((req, res, next) => {
    res.header({ "Access-Control-Allow-Origin": "*" });
    next();
  });
  
router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.use(helmet());
router.use(cors());
router.use(morgan("combined"));
 
router.get('/', async(req, res) => {
    res.send(BookInfo)
})

router.post('/ReturnBook', async(req, res) =>{
    bookName = req.body.bookName
    studentName = req.body.studentName
    console.log(bookName, studentName)

    Array.from(BookInfo).forEach((element)=>{
        if(element.bname == bookName){
        //    let temp = element.borrowedBy
           let idx = element.borrowedBy.indexOf(studentName)
           idx >= 0 && element.borrowedBy.splice(idx, 1)
           idx >= 0 && element.borrowDate.splice(idx, 1)
           idx >= 0 && element.expDate.splice(idx, 1)
        }
    })
    
    res.send(BookInfo)
})

router.post('/BorrowBook', async (req, res) => {
    bookName = req.body.bname
    author = req.body.author
    borrowedBy = req.body.borrowedBy
    borrowDate = req.body.borrowDate
    expDate = req.body.expDate

    Array.from(BookInfo).forEach((element)=>{
        if(element.bname == bookName){
        //    let temp = element.borrowedBy
           element.borrowedBy = borrowedBy
           element.borrowDate = borrowDate
           element.expDate = expDate
        }
    })
    
    res.send(BookInfo)

})
module.exports = router;