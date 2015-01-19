var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Comment = mongoose.model('Comment');


router.post('/', function(req, res) {


    var emailLogin = req.body;

    var queryString = emailLogin.email;

    var comments={};
    var flag="";

    Comment.find({ email : queryString}, function(err, comments) {

        if (comments.length > 0) {
            console.log("LOGGED-IN");
            comments = comments[0];
            flag=comments;
        }

        else {
            console.log("does not exist");
        }

        res.send(flag);

    });

});




module.exports = router;