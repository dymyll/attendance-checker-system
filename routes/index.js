//mongodb://dymyll:Prince2410@ds229295.mlab.com:29295/student


var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var connection = "mongodb://dymyll:Prince2410@ds229295.mlab.com:29295/student";
mongoose.connect(connection, { useMongoClient: true });

mongoose.Promise = global.Promise;

var studentSchema = new mongoose.Schema({
   firstName: String,
   lastName: String,
   buffID: String
});

var schoolSchema = new mongoose.Schema({
    schoolName: String,
    schoolID: String,
    
});

var classSchema = new mongoose.Schema({
    className: String,
    classID: String,
    ProfessorName: String,
    studentRoster: Array,
    classMeetings:Array
    
});

var AttendanceSchema = new mongoose.Schema({
    classID: String,
    schoolID: String,
    studentsEnrolled: classSchema.studentRoster,
    studentsAtteneded:Array(classSchema.studentRoster),
    currentDay: Date,
    attendanceAvg: String //classSchema.studentRoster/classSchema.classMeetings
    
});




//The string will be pluralised in mlabs example 'Student' willl be 'Students'
var Student = mongoose.model('Student', studentSchema);


router.get('/add/:firstName/:lastName', function(req, res, next) {
    
    var rand = new Student(
        { 
            firstName: req.params.firstName,
            lastName: req.params.lastName,
            buffID: '1254547'
            
        }
    );
    rand.save(function (err) {
      if (err) {
        console.log(err);
        res.send('There was an error');
      } else {
         var message = req.params.firstName + " " + req.params.lastName + ' is saved in the db';
        console.log(message);
        res.send(message);
      }
    });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/greeting', function (req,res,next) {
   res.send("Hello, I greet you");
});

router.get('/greeting2', function (req,res,next) {
   res.send("Hello, I greet you again");
});



module.exports = router;

