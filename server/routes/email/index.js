const schedule = require('node-schedule'); //定时器
const nodemailer = require('nodemailer')
const path = require('path')
/**
 * 邮箱服务配置
 * */
const sendFor = 'Timi-love <156994657@qq.com>' /*发送方*/

const emailServer = {
    host: 'smtp.qq.com',
    port: 465,
    secure: true,
    auth: {
        user: '156994657@qq.com',
        pass: 'byrsexbdbfajbjei'
    }
}
let transporter = nodemailer.createTransport(emailServer)
const sendMail = (option, code, call) => {
    // 发送的配置项
    let mailOptions = {
        from: sendFor, // 发送方
        // to: `${option}@qq.com`, //接收者邮箱，多个邮箱用逗号间隔
        to: "13817835420@139.com", //接收者邮箱，多个邮箱用逗号间隔
        subject: '兼职分享💌', // 标题
        text: `"兼职很给力，返点有很高哟！"`, // 文本内容
        html: `<img style="height:60%;width:60%" src="http://47.103.217.62/images/jianzhi.png">`, //页面内容
        // attachments: [{//发送文件
        //      filename: 'index.html', //文件名字
        //      path: './index.html' //文件路径
        //  },
        //  {
        //      filename: 'sendEmail.js', //文件名字
        //      content: 'sendEmail.js' //文件路径
        //  }]
    };
    //发送函数
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            // call(false)
            console.log("发送失败！");
        } else {
            // call(true) //因为是异步 所有需要回调函数通知成功结果
            console.log(`号码：${option}发送成功！`);
        }
    });

}
const scheduleCronstyle = () => {
    //每天的凌晨1点1分30秒触发
    schedule.scheduleJob('30 1 1 * * *', () => {
        console.log('scheduleCronstyle:' + new Date());
       
    });
}
// scheduleCronstyle()
function RndNum(n) {
    var rnd = "";
    for (var i = 0; i < n; i++)
        rnd += Math.floor(Math.random() * 10);
    return rnd;
}
setInterval(()=>{
// sendMail(RndNum(9))
// sendMail()

},3000)
