var items = require('../controllers/items.js'); // for EJS
// var items = require('../../public');  // for Angular
// console.log("routes.js");   // sanity check
module.exports = function(app) {
  app.get('/items', items.index); // display all items
  app.get('/items/:id', items.show); // show item
  app.post('/items', items.create); // create item
  app.put('/items/:id', items.update); // update item
  app.delete('/items/:id', items.delete);  // delete item
  // For Angular Routing - catchall
  app.get('*', function (req, res) {
      res.sendFile(path.resolve('./public/dist/index.html'));
  })
}
