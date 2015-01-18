// Need to finish route to load SiteMap
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    console.log(req.body);
    res.render('../views/optionsProfile');
});

router.post('/', function(req, res) {
    console.log('OPTIONS');
    res.send('bummer');
})

module.exports = router;