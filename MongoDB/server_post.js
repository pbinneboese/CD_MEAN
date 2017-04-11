// define Schema variable
var Schema = mongoose.Schema;
// define Post Schema
var PostSchema = new mongoose.Schema({
	text: {type: String, required: true },
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true });
// define Comment Schema
var CommentSchema = new mongoose.Schema({
	_post: {type: Schema.Types.ObjectId, ref: 'Post'},
	text: {type: String, required: true }
}, {timestamp: true });
// set our models by passing them their respective Schemas
mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);
// store our models in variables
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

// route for getting a particular post and comments
app.get('/posts/:id', function (req, res){
	Post.findOne({_id: req.params.id})
	.populate('comments')
	.exec(function(err, post) {
		res.render('post', {post: post});
	});
});
// route for creating one comment with the parent post id
app.post('/posts/:id', function (req, res){
	Post.findOne({_id: req.params.id}, function(err, post){
		var comment = new Comment(req.body);
		comment._post = post._id;
		post.comments.push(comment);
		comment.save(function(err){
			post.save(function(err){
				if(err) { console.log('Error'); }
				else { res.redirect('/'); }
			});
		});
	});
});
