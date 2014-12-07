var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Comment = mongoose.model('Comment');



/* GET form. */
router.get('/', function(req, res) {

    console.log('Vaboom!');
//    console.log(req);
//
//    res.render('layout');

    res.render('user_form');

/*    Comment.find(function(err, comments){
        res.render(
            'user_form',
            {comments : comments}
        );
    });*/
});


//router.post('/', function(req, res){
//    var topo = req.body.comment;
//    console.log(topo + "123456");
//    res.render('table');
//});

router.post('/', function(req, res) {

//  NEED TO PASS EMAIL TO FORM TO PREPOPULATE
    var email = req.body.user_email;

    new Comment(
        {user_email: email}
    )
//        the below function saves the generated Comment into the mongo database
        .save(function(err, comment) {
            console.log(comment);
            res.render('user_form');
            //res.redirect('form');
//          then the browser is sent to the /form endpoint in app.js
//            res.redirect(200, "/form")
        });

});


module.exports = router;