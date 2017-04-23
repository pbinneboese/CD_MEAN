var friends = require('../controllers/friends.js'); // for EJS
// var friends = require('../../public');  // for Angular
// console.log("routes.js");   // sanity check
module.exports = function(app) {
  app.get('/friends', friends.index); // display all friends
  app.get('/friends/:id', friends.show); // show friend
  app.post('/friends', friends.create); // create friend
  app.put('/friends/:id', friends.update); // update friend
  app.delete('/friends/:id', friends.delete);  // delete friend
  // For Angular Routing - catchall
  app.get('*', function (req, res) {
      res.sendFile(path.resolve('./public/dist/index.html'));
  })
}
