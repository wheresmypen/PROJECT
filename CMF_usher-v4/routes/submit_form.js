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

    var formContents = req.body;

    console.log(formContents.email);
//
//    console.log($.parseJSON(value.values)+"+++");
//
    var value2 = formContents.lastname;


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
            console.log(comment);
            res.send('today');
            //res.redirect('form');
//          then the browser is sent to the /form endpoint in app.js
//            res.redirect(200, "/form")
        });

});


module.exports = router;

/*
var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Comment = mongoose.model('Comment');




router.post('/', function (req, res){

    var formContents = req.body;

    console.log(formContents.email);
//
//    console.log($.parseJSON(value.values)+"+++");
//
    var value2 = formContents.lastname;


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
        .save(function(err, email) {
//            console.log(email);
            res.render('user_form');
            //res.redirect('form');
//          then the browser is sent to the /form endpoint in app.js
//            res.redirect(200, "/form")
        });

});




module.exports = router;*/
