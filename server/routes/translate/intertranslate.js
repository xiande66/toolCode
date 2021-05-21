const puppeteer = require('puppeteer');
const fs = require('fs');
const array = require('../../utils/array');
const filters = require('../../utils/filterStr');
const path = require('path');

const writer = (url, data) => {
    fs.appendFileSync(url, data, (err) => {
        if (!err) {
            console.log('ok');
            resolve()
        } else {
            reject()
        }
    })
}
/*
翻译后生成JSON
 */
const appendText = (arr, url, type) => {
    new Promise(async (resolve, reject) => {
        // const content = await array(path.join(__dirname, './start.txt'))
        const content = await array(arr)
        let zh,tw,en;
        content.zh.forEach((data, i) => {
            console.log(content.en);
            if (type == 'json') {
                zh = `${filters(content.en[i])}:'${data}',\n`
                tw = `${filters(content.en[i])}:'${content.tw[i]}',\n`
                en = `${filters(content.en[i])}:'${content.en[i]}',\n`
            } else {
                zh = `${filters(content.en[i])} = ${data}\n`
                tw = `${filters(content.en[i])} = ${content.tw[i]}\n`
                en = `${filters(content.en[i])} = ${content.en[i]}\n`
            }


            if (content.en[0]) {
                writer(url.en, en)
                writer(url.tw, tw)
                writer(url.zh, zh)
                writer(url.zh, zh)
            }
        })
    })
}

module.exports = {
    appendText
};