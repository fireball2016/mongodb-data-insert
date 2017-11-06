// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if (err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

// db.collection('Todos').find({
//   _id: new ObjectID('59f7ebb121c1fa14b3f81596')
// }).toArray().then((docs) => {
//   console.log('Todos');
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   console.log('Unable to fetch todos', err);
// })

// db.collection('Todos').find().count().then((count) => {
//   console.log(`Todos count: ${count}`);
// }, (err) => {
//   console.log('Unable to fetch todos', err);
// })

db.collection('Users').find({name: 'Jake Ni'}).count().then((count) => {
  console.log(`Users count: ${count}`);
}, (err) => {
  console.log('Unable to fetch users', err)});

  db.collection('Users').find({name: 'Jake Ni'}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Users', err);
  });

  // db.close();
});
