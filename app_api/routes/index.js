//mongodb://dymyll:Prince2410@ds229295.mlab.com:29295/student
var express = require('express');
var router = express.Router();
var StuFunc = require("../controller/studentCtrl")



router.get('/add/:firstName/:lastName', StuFunc.addStudent);

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/greeting', function (req,res,next) {
   res.send("Hello, I greet you");
});

router.get('/greeting2', function (req,res,next) {
   res.send("Hello, I greet you again");
});

*/

module.exports = router;

