var express = require('express');
var fs = require('fs');
const paths = require('path')
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res, next) {
  const {
    name,
    path,
    type
  } = req.body;
  const generate = (name, type, path) => {
    return new Promise((resole, reject) => {
      const data = fs.readFileSync(paths.join(__dirname, `./model/${type}.txt`)).toString();
      let lastName = type == 'store' ? '.js' : '.vue'
      fs.writeFileSync(`${path}/${name}${lastName}`, data.replace('$name', name), (err) => {
        if (err) {
          reject()
        } else {
          resole()
        }
      })
    })
  }
  name.forEach(element => {
    generate(element, type, path)
  });

  res.json({
    code: 0,
    msg: 'success',
    data: ''
  })
});

router.get('/fileType', function (req, res, next) {
  let fileArr = fs.readdirSync(paths.resolve(__dirname, './model'));
  if (fileArr) {
    fileArr = fileArr.map((data)=>{
      return data.replace('.txt','');
    })
    res.json({
      code: 0,
      msg: 'success',
      data: fileArr
    })
  }else{
     res.json({
       code: 1,
       msg: '模板为空',
       data: ''
     })
  }
})
module.exports = router;