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

    res.render('index');

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

    var formContents = req.body;

    console.log(formContents.email+"------");

    var queryString = formContents.email;
    ////////// ADDED FROM VERSION 3

    var dummy = {
        firstname : "false return"
    };
    var comments={};

    Comment.find({ email : queryString}, function(err, comments) {
        console.log(comments+"hjhjhjhj");

        if (comments.length > 0) {
            console.log("LOGGED-IN");
            console.log(comments[0] + "%%%%%%");
            comments = comments[0];
            console.log(comments+'+++++');
//            res.send(comments);
//            window.location.href = 'http://localhost:3000/siteMap'
        }

        else {
            console.log("does not exist");
            console.log(dummy);
            res.send(dummy);
//            res.render('../views/user_form');
        }
    });


    //////////



    new Comment(
        {   email: formContents.email
            ,   lastname: formContents.lastname
            ,    firstname: formContents.firstname
            ,    streetAddress: formContents.streetAddress
            ,    cityAddress: formContents.cityAddress
            ,    zipAddress: formContents.zipAddress
            ,    contactMethod: formContents.contactMethod
            ,    cellNo: formContents.cellNo
            ,    altPhone: formContents.altPhone}
    )
//        the below function saves the generated Comment into the mongo database
        .save(function(err, comment) {
            console.log(formContents);
            res.send('saved');
            //res.redirect('form');
//          then the browser is sent to the /form endpoint in app.js
//            res.redirect(200, "/form")
        });

});


module.exports = router;