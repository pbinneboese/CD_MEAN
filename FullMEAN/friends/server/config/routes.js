var friends = require('../controllers/friends.js'); // for EJS
// var friends = require('../../public');  // for Angular
// console.log("routes.js");   // sanity check
module.exports = function(app) {
  // app.get('/friends', friends.initial); // display all friends
  app.get('/friends', friends.index); // display all friends
  // app.get('/:name', friends.detail); // show detail
  // app.get('/new/:name/', friends.new); // create name
  // app.get('/remove/:name/', friends.remove);  // remove name
  // For Angular Routing
  app.get('*', function (req, res) {
      res.sendFile(path.resolve('./public/dist/index.html'));
  })
}
