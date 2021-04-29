var express = require('express');
var router = express.Router();
const convert = require('./TW')


router.post('/', function (req, res, next) {
    const {
        type,
        text
    } = req.body;
    if (type == '0' || type == '1') {
        res.json({
            code: 0,
            msg: '成功',
            data: convert(type, text)
        })
    } else {
        res.json({
            code: 1,
            msg: '类型错误，请填0或1',
            data: []
        })
    }
});
router.post('/en', function (req, res, next) {

});

module.exports = router;