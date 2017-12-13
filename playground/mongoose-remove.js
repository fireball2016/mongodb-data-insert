const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// })

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

// Todo.findByIdAndRemove('5a30a30873ef74e97bc462de').then((todo) => {
//   console.log(todo);
// });
//
// Todo.findOneAndRemove(_id: '5a30a30873ef74e97bc462de').then((todo) => {
//   console.log(todo);
// });
