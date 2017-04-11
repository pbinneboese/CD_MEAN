// var express = require("../node_modules/express");
var express = require("express");
var app = express();
var path = require("path"); // for standard path routing

var bodyParser = require('body-parser');  // for processing POST data
app.use(bodyParser.urlencoded({extended: true}));

var session = require('express-session'); // for SESSION data
app.use(session({secret: 'codingdojorocks'}));  // string for encryption

app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.listen(8000, function() {
  console.log("listening on port 8000");
})

// root route
app.get('/', function (req, res){
  res.render('index', {title: "my Express project"});
});
// app.get('/', function(req, res) {
//   res.send("<h1>Hello Express</h1>");
// })

// route to process new user form data:
app.get("/users", function (req, res){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Brendan", email: "brendan@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    res.render('users', {users: users_array});
})
app.post('/users', function (req, res){
    console.log("POST DATA \n\n", req.body)
    //code to add user to db goes here!
    // redirect the user back to the root route.
    res.redirect('/')
});
// testing RESTful route data-passing via URL
app.get("/users/:id", function (req, res){
    console.log("The user id requested is:", req.params.id);
    // just to illustrate that req.params is usable here:
    res.send("You requested the user with id: " + req.params.id);
    // code to get user from db goes here, etc...
});

// For Session DATA
app.post('/users', function (req, res){
    // set the name property of session.
    req.session.name = req.body.name;
    console.log(req.session.name);
    //code to add user to db goes here!
    // redirect the user back to the root route.
    res.redirect('/');
});
