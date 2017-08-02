var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp'); //for local test
mongoose.connect('mongodb://Horace:g411314learn@ds127783.mlab.com:27783/to-do-api' || 'mongodb://localhost:27017/TodoApp'); //for deploy on heroku

module.exports = {mongoose};
