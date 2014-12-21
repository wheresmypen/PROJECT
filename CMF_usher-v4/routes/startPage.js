// Need to finish route to load SiteMap
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    console.log("problem");
    console.log(req.body);
    /*    if res.body === "loop"{
     console.log("going in circles");
     }*/
    res.render('../views/startPage');
});


module.exports = router;