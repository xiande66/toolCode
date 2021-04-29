var express = require('express');
var router = express.Router();
const {
  appendText
} = require('./translate/intertranslate')



/* GET users listing. */
router.post('/', function(req, res, next) {
  const {
    fileName,
    zh,
    en,
    tw,
    type
  } = req.body  

appendText(fileName,{zh,en,tw},type)
 res.json({
   code:0,
   msg:'success',
   data:[]
 })
});

module.exports = router;
