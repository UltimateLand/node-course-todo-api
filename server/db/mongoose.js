var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');
// mongoose.connect('mongodb://Horace:g411314learn@ds127783.mlab.com:27783/to-do-api' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
