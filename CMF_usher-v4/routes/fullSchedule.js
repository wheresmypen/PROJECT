var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Comment = mongoose.model('Comment');

/* GET users listing. */
router.get('/', function(req, res) {
    res.render('../views/fullSchedule');
});

router.post('/', function(req, res) {
    var login_id = req.body.email;

    var dummy = {
        email : "false return"
    };
    var comments={};

    console.log(dummy);

    Comment.find({ email : login_id}, function(err, dummy) {
        console.log(dummy);

        if (dummy.length > 0) {
            console.log("LOGGED-IN");
            dummy = dummy[0];
            console.log(dummy+'+++++');
            newday(dummy);
//            res.send({email: 'goober'});
        }

        else {
            console.log("does not exist");
            console.log(dummy);
            res.send({});
        }
    });

    console.log(dummy);

    function newday(returnObj) {

        console.log(returnObj.email);

        if (dummy.email === "false return") {
            console.log("false--------");
        }

        res.send(returnObj);

    }

});



module.exports = router;