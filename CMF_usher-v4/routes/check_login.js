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
            console.log(comments+'+++++')
            flag="data";
//            res.send(comments);
//            res.send('SiteMap');
//            res.send('data')
        }

        else {
            console.log("does not exist");
            console.log('dummy');
            flag="new";
//            res.send(dummy);
//            return res.redirect('/siteMap');
        }

        res.send(flag);
    });





});




module.exports = router;