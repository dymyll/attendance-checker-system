var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

var studentSchema = new mongoose.Schema({
   firstName: String,
   lastName: String,
   buffID: String
});

//The string will be pluralised in mlabs example 'Student' willl be 'Students'
mongoose.model('StudentData', studentSchema, 'StudentData'); // this allows that the schema will be used above. 

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
    //studentsEnrolled: classSchema.studentRoster,
    //studentsAtteneded:Array(classSchema.studentRoster),
    currentDay: Date,
    attendanceAvg: String //classSchema.studentRoster/classSchema.classMeetings
    
});
