var express = require('express');
var router = express.Router();
const {
    get_friend_list, send_msg,
    get_group_member_info,
} = require('../../api/qqBot')

/* GET home page. */
router.get('/getFriend', function (req, res, next) {
    get_friend_list().then((data) => {
        const {
            body
        } = data;
        res.json({
            code: 0,
            msg: 'success',
            data: JSON.parse(body)
        })
    }).catch((err) => {
        res.json({
            code: 0,
            msg: err,
            data: []
        })
    })

});
router.post('/sendMsg', function (req, res, next) {
    const {body} = req;
    send_msg(body).then((data) => {
        res.json({
            code: 0,
            msg: 'success',
            data: []
        })
    }).catch((err) => {
        res.json({
            code: 0,
            msg: err,
            data: []
        })
    })

});
router.post('/getGroupInfo', function (req, res, next) {
     const {
         body
     } = req;
    get_group_member_info(body).then((data) => {
        const {
            body
        } = data;
        res.json({
            code: 0,
            msg: 'success',
            data: JSON.parse(body)
        })
    }).catch((err) => {
        res.json({
            code: 0,
            msg: err,
            data: []
        })
    })

});
module.exports = router;