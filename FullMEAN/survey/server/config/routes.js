var surveys = require('../controllers/surveys.js'); // for EJS
// var surveys = require('../../public');  // for Angular
// console.log("routes.js");   // sanity check
module.exports = function(app) {
  app.get('/surveys', surveys.index); // display all surveys
  app.get('/surveys/:id', surveys.show); // show survey
  app.post('/surveys', surveys.create); // create survey
  app.put('/surveys/:id', surveys.update); // update survey
  app.delete('/surveys/:id', surveys.delete);  // delete survey
  app.post('/login', surveys.login); // login or register account
  app.get('/logout', surveys.logout); // logout account
  app.get('/checkLogin', surveys.checkLogin); // check login status
  app.get('/account', surveys.getAccounts); // get all accounts
  // For Angular Routing - catchall
  app.get('*', function (req, res) {
      res.sendFile(path.resolve('./public/dist/index.html'));
  })
}
