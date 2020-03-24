var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/vc', function(req, res) {
  console.log("enter : " + req.body.roomName);
  var room = req.body.roomName.trim();
  res.render('vc', { roomName: room, userName: req.body.userName}); 
});

module.exports = router;
