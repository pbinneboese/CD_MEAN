// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require Mongoose for MongoDB
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;  // override Mongoose deprecated Promise operator
mongoose.connect('mongodb://localhost/basic_mongoose'); // connect to basic_mongoose database
var UserSchema = new mongoose.Schema({
  name: String,
  age: Number
})
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
app.get('/', function(req, res) {
  // fetch users collection from database
  User.find({}, function(err, users) {
    console.log(users[0].name, users[0].age);
    if(err) { // error handling callback
      console.log('something went wrong');
      users = {}; // blank out the users
    }
    res.render('index', {users:users});
  })
})
// Add User Request
app.post('/users', function(req, res) {
  console.log("POST DATA", req.body);
  if (req.body.name && req.body.age) {  // got valid user data
    var user = new User({name: req.body.name, age: req.body.age});
    // save to dB
    user.save(function(err) {
      if(err) { // error handling callback
        console.log('something went wrong');
      } else {
        console.log('successfully added a user!');
        res.redirect('/');
      }
    })
  }
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
})
