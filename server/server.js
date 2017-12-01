// var mongoose = require('mongoose');
//
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  })
});

// GET/todos/1234123
//valid id using isValid
  //404 -send back empty send

//find by id
  //success
    // if todo - send it back
    // if no todo - send back a 404 with empty body
  //error
    //400 - and send empty body back
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)) {
    res.status(404).send({});
  }

  Todo.findById(id).then((todos) => {
    if(!todos) {
      res.status(404).send({});
    }
    res.send({todos});
  }, (e) => {
    res.status(400).send({});
  })

});

app.listen(3000, () => {
  console.log('Fired up on port 3000');
});

//create mongoose model
// var Todo = mongoose.model('Todo', {
//   text: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   }
// });
//
// var User = mongoose.model('User', {
//   email: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   }
// });

//create collections
// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// var otherTodo = new Todo({
//   text: '  edit this   video    '
// });
//
// var newUser = new User({
//   email: '123abcd@gmail.com'
// });
//
// //save collections to database
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });
//
// newUser.save().then((doc) => {
//   console.log('Saved user', doc);
// }, (e) => {
//   console.log('Unable to save user');
// });
module.exports = {app};
