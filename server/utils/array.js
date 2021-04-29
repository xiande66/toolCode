const fs = require('fs');
const path = require('path')
const translate = require('./translate')
const convert = require('../routes/translate/TW')
/*
将录入的信息转为JSON 
 */
const arrayFn = (arr) => {
    return new Promise((resolve, reject) => {
        // const data = path.join(__dirname, filePath)
        const content = arr;
        const obj = {
            zh: [],
            tw: [],
            en: []
        }
        translate(content).then((res) => {
            let contentArray = content;
            let enArray = res.split('\n');

            contentArray.forEach((data,i) => {
                obj.zh.push(data.replace('\r', ''))
                obj.tw.push(convert(1,data.replace('\r', '')))
                obj.en.push(enArray[i])
            })
             resolve(obj)
        })
    })
}

module.exports = arrayFn