var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
    console.log(req.body);
    console.log("New Route");
    res.send("POST_ROUTE");
});

module.exports = router;