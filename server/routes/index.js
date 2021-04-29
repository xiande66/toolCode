var express = require('express');
var router = express.Router();
const request = require('request')
const path = require('path')
const fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  const str = fs.readFileSync(path.resolve(__dirname, '../dist/index.html')).toString();
  console.log(str);
  res.send(str)
});

module.exports = router;
