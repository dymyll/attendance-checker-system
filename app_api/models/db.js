var mongoose = require("mongoose");

var connection = "mongodb://dymyll:Prince2410@ds229295.mlab.com:29295/student";
mongoose.connect(connection, { useMongoClient: true });



mongoose.Promise = global.Promise;

require('./students')
