// Need to finish route to load SiteMap
var express = require('express');
var router = express.Router();


// NEED TO ADD AJAX CALL OR SOME KIND OF CHECK TO DETERMINE OR SET LOGIN FROM LOCAL STORAGE

/* GET users listing. */
router.get('/', function(req, res) {
    console.log("RENDER START PAGE");
    /*    if res.body === "loop"{
     console.log("going in circles");
     }*/
    res.render('../views/startPage');
});


module.exports = router;