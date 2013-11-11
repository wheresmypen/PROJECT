
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: "Not your grand-dad's record collection" });
};