const fs = require('fs')

const list = fs.readFileSync('./test.txt').toString();

const arr = list.split('/n');


var ass = arr.map((data)=>{
    const reg = /route(\S*),/g
    const str = data.match(reg);
  
    return str;
})
var asss = arr.map((data) => {
    const reg = /load(\S*);/g
    const str = data.match(reg);

    return str;
})
console.log(ass[0].length);
var abb = ass[0].map((data)=>{
  data = data.replace('route(', '').replace(',', '').replace(/'/g, '')
return data;
})
var add = asss[0].map((data)=>{
    data = data.replace('load(', '').replace(');', '').replace(/'/g, '').replace('.html', '').replace('./template', '');
    return data;
})
console.log();
console.log([...new Set(add)]);
const addd = [...new Set(abb)];
const adddf = [...new Set(add)];
var adds = {}
addd.forEach((data,i)=>{
    adds[data] = adddf[i];
})
console.log(adds);