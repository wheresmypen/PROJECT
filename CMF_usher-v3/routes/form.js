var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Comment = mongoose.model('Comment');




/* GET form. */
router.get('/', function(req, res) {


    console.log('hi!');
    console.log(req.query.user_email);

    var queryString = req.query.user_email;
    var dummy = {
        firstname : "false return"
    };
    var comments={};

    Comment.find({ email : queryString}, function(err, comments){
        console.log(comments);

        if (comments.length > 0) {
            console.log("LOGGED-IN");
            console.log(comments[0]+"------");
            comments = comments[0];
            res.send(comments);
    //            res.redirect("/user_form");
        }

        else {
            console.log("does not exist");
            console.log(dummy);
            res.send(dummy);
//            res.render('../views/user_form');
        }



//        RIGHT NOW THIS IS RETURNING THE AJAX CALL FROM INDEX_FRONT.JS WITH SOME DUMMY DATA
//        IT NEEDS TO BE CODED TO CREATE A SEARCH ON THE DATA BASE (SIMILAR TO THE POST BELOW...)
//        AND EITHER RETURN THE OBJECT WITH THE FOUND KEY_VALUE PAIR OR A FLAG TO CREATE A NEW USHER

//        res.send(comments);
    });
});

/* POST form. */
router.post('/', function(req, res) {
    new Comment({title : req.body.comment})
        .save(function(err, comment) {
            console.log("++++++"+comment);
            res.redirect('form');
        });
});

module.exports = router;
