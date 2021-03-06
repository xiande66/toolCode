const fs = require('fs');

const str = fs.readFileSync('./index.text',()=>{}).toString();

let finaAarray = []
var xian = str.match(/[0-9].*/g);
var chenc = xian.filter((data)=>{
    return (data.indexOf('-')==-1);
})
var tou = chenc.filter((data)=>{
    return data.substring(0,3).indexOf('.')!=-1
})
var zhong = str.match(/地址：..*/g);
var wei = str.match(/类型：..*/g);
// var weis = str.match(/（\S*）/g);  //匹配括号

for (let i = 0; i < tou.length; i++) {
  finaAarray.push({
      title: tou[i].substring(tou[i].indexOf('.')+1, tou[i].length),
      address: zhong[i].replace('地址：',''),
      type:wei[i].replace('类型：','')
  })
}
fs.writeFileSync('./test.json', JSON.stringify(finaAarray))