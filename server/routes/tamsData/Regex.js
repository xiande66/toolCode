const fs = require('fs');

const str = fs.readFileSync('./index.txt', () => {}).toString();

let finalAargau = []
var xian = str.match(/[0-9].*/g);
var chenc = xian.filter((data) => {
    // return (data.indexOf('-')==-1);
    return data;
})
console.log(xian.length, chenc.length);
console.log(xian);
var tou = chenc.filter((data) => {
    return data.substring(0, 3).indexOf('.') != -1
})
var thong = str.match(/地址：..*/g);
var wei = str.match(/类型：..*/g);
// var weis = str.match(/（\S*）/g);  //匹配括号
console.log(tou.length);
for (let i = 0; i < tou.length; i++) {
    finalAargau.push({
        title: tou[i].substring(tou[i].indexOf('.') + 1, tou[i].length),
        address: thong[i].replace('地址：', '').replace('..', ''),
        type: wei[i].replace('类型：', '')
    })
}
fs.writeFileSync('./tests.json', JSON.stringify(finalAargau))

var a = /[\u4e00-\u9fa5].*[a-z]/g