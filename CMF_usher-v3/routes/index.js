var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

/*
router.post('/', function(req, res){
    var topo = req.body;
    console.log(req.body.comment + "12345678790");
    res.send(topo.comment);
});
*/

module.exports = router;
