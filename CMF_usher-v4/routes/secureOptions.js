var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
    console.log(req.body);
    console.log("submit for query");
    res.send("POST_ROUTE");
});


module.exports = router;