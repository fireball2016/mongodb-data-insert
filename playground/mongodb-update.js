// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if (err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

//findOneAndUpdate
// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5a00c80ebd7b7048b1012f91')
// }, {
//   $set: {
//     completed: true
//   }
// }, {
//     returnOriginal: false
//   }
// ).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('59fb3a500ea8dd1757308d26')
}, {
  $set: {
    name: 'Jake Ni',
  },
  $inc: {
    age: 1
  }
}, {
    returnOriginal: false
  }
).then((result) => {
  console.log(result);
});

  // db.close();
});
