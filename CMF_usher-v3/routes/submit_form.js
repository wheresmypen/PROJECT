var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Comment = mongoose.model('Comment');




router.post('/', function (req, res){
    console.log(req.body);

    new Comment(
        {email: req.body}
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