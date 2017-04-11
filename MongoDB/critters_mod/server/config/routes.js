var critters = require('../controllers/controller');

module.exports = function(app) {
app.get('/', critters.index); // display critters
app.get('/new', critters.create_form); // create form
app.post('/critter', critters.create_post);  // create post
app.get('/:id', critters.detail); // show detail
app.get('/:id/edit/', critters.edit_form);  // edit form
app.post('/:id/critter', critters.edit_post); // edit post
app.post('/:id/delete/', critters.delete);  // delete post
}
