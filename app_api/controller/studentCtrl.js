var mongoose = require("mongoose");
var Student = mongoose.model('StudentData');

module.exports.addStudent = function(req, res, next) {
    
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
}
