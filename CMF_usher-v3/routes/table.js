var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Comment = mongoose.model('Comment');

/* GET form. */
router.get('/', function(req, res) {
    Comment.find(function(err, comments){
        res.render(
            'table',
            {comments : comments}
        );
    });
});


//router.post('/', function(req, res){
//    var topo = req.body.comment;
//    console.log(topo + "123456");
//    res.render('table');
//});

router.post('/', function(req, res) {
    new Comment(
        {user_email: req.body.user_email}
    )
//        the below function saves the generated Comment into the mongo database
        .save(function(err, comment) {
            console.log(comment);
            res.render('table');
            //res.redirect('form');
//          then the browser is sent to the /form endpoint in app.js
//            res.redirect(200, "/form")
        });
});


module.exports = router;