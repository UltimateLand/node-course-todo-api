const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });
// 
// Todo.findOneAndRemove({_id: '598076a176196415bcdcaa70'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('598076a176196415bcdcaa70').then((todo) => {
  console.log(todo);
});
