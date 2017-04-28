var users = require('../controllers/users.js'); // for EJS
// var users = require('../../public');  // for Angular
// console.log("routes.js");   // sanity check
module.exports = function(app) {
  app.get('/users', users.index); // display all users
  app.get('/users/:id', users.show); // show user
  app.post('/users', users.create); // create user
  app.put('/users/:id', users.update); // update user
  app.delete('/users/:id', users.delete);  // delete user
  app.post('/login', users.login); // login or register account
  app.get('/logout', users.logout); // logout account
  app.get('/checkLogin', users.checkLogin); // check login status
  // app.get('/getAccounts', users.getAccounts); // get all accounts
  // For Angular Routing - catchall
  app.get('*', function (req, res) {
      res.sendFile(path.resolve('./public/dist/index.html'));
  })
}
