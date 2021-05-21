const fs = require('fs')

const str = fs.readFileSync('./index.txt').toString();

const arr = str.split('\n');
let bgObj = {}
let obj = ''
let jj = {}
let obj1 = []
let obj3 = []
arr.forEach((data,i)=>{
// obj[data.replace(/\r/g, '')] = ''
 obj = {
  type: 'input',
  id: '34',
  label: '',
  placeholder: '员工编号'
}
var obj2 = {
  columnName: 'customer_type',
  columnTitle: '客户类型',
  width: '',
  isShow: true
}
let zh = data.match(/[\u4e00-\u9fa5]/g).join('')
let en = data.match(/[a-zA-Z_]/g).join('')
obj.id = en
obj.label = ''
obj.placeholder = zh

obj2.columnName = en
obj2.columnTitle = zh

obj1.push(obj)
obj3.push(obj2)
jj[en] = zh
// obj1.push({
//   name:data.match(/[\u4e00-\u9fa5]/g).join(''),
//   ename: data.match(/[a-zA-Z_]/g).join('')
// })
})

bgObj.json = jj

bgObj.form = obj1

bgObj.forms = obj3


fs.writeFileSync('./data.js', JSON.stringify(bgObj), () => {
  
})