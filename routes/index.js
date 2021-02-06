var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('things.ejs');
});

router.get('/start', function(req,res){
  res.render('index.ejs');
})

router.get('/playAudio', function(req,res){
  res.render('playsound.ejs')
})




module.exports = router;
