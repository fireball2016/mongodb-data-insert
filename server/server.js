var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

//create mongoose model
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

//create collections
var newTodo = new Todo({
  text: 'Cook dinner'
});

var otherTodo = new Todo({
  text: '  edit this   video    '
});

var newUser = new User({
  email: '123abcd@gmail.com'
});

//save collections to database
newTodo.save().then((doc) => {
  console.log('Saved todo', doc);
}, (e) => {
  console.log('Unable to save todo');
});

newUser.save().then((doc) => {
  console.log('Saved user', doc);
}, (e) => {
  console.log('Unable to save user');
});
