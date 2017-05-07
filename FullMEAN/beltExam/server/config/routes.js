var topic = require('../controllers/topics.js'); // for EJS
// var topic = require('../../public');  // for Angular
// console.log("routes.js");   // sanity check
module.exports = function(app) {
  app.get('/topic', topic.index); // display all topics
  app.get('/topic/:id', topic.show); // show topic
  app.post('/topic', topic.create); // create topic
  app.put('/topic/:id', topic.update); // update topic
  app.delete('/topic/:id', topic.delete);  // delete topic
  app.post('/login', topic.login); // login or register account
  app.get('/logout', topic.logout); // logout account
  app.get('/checkLogin', topic.checkLogin); // check login status
  app.get('/account', topic.getAccounts); // get all accounts
  // For Angular Routing - catchall
  app.get('*', function (req, res) {
      res.sendFile(path.resolve('./public/dist/index.html'));
  })
}
