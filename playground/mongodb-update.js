// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server.'); //return the error then jump out the whole function
  }
  console.log('Connected to MongoDB Server.');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("597cae3d8f67c114e9104073")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('597cb1c48f67c114e9104161')
  }, {
    $set: {
      name: 'Joyce'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
