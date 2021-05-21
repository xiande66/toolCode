// const {
//     appendText
// } = require('./routes/translate/intertranslate')

// appendText()

const fs = require('fs')
const path = require('path')


const fileDir = 'E:\\TAMS\\code\\trunk\\tams-web\\src\\views\\systemManagement'
const file = 'E:\\TAMS\\code\\trunk\\tams-web\\src\\api\\systemManagement'

var str = fs.readdirSync(fileDir)

str.forEach((data) => {
    fs.writeFileSync(`${file}\\${data}.js`, `import request from '@/utils/request'`, () => {})
})

console.log();