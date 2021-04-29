const fs = require('fs')

const str = JSON.parse(fs.readFileSync('./tests.json').toString());

str.forEach((data)=>{
    const name = data.address.split('/');
    let str2 = ''
if(data.type == 'post'){
str2 = fs.readFileSync('./model.js').toString().replace('$des', data.title).replace('$name', name[name.length-1]).replace('$type', data.type).replace('$url', data.address);
}else{
str2 = fs.readFileSync('./model2.js').toString().replace('$des', data.title).replace('$name', name[name.length-1]).replace('$type', data.type).replace('$url', data.address);
}
fs.appendFileSync('./api.js',str2,()=>{})
})
