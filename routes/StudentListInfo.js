const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const router = express.Router();

StudentInfo = [
    {"fname" : "Suffah",
    "lname" : "Aftab"},
    {"fname" : "Ali",
    "lname" : "Hamza"},
    {"fname" : "Faizan",
    "lname" : "Asif"},
    {"fname" : "Max",
    "lname" : "James"},
    {"fname" : "Leena",
    "lname" : "Oxford"}
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
    res.send(StudentInfo)
})

module.exports = router;