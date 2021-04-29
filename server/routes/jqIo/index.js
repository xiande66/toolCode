const cheerio = require('cheerio');
const fs = require('fs')
const request = require('request')
// request.get('http://localhost:')
const fileUrl = 'C:\\Users\\murph.chen\\Desktop\\home'

const str = fs.readdirSync(fileUrl);
const newstr = str.filter((data) => {
    if (/.html/g.test(data)) {
        return data;
    }

})
console.log(newstr);

newstr.forEach((res) => {
    const s = fs.readFileSync(fileUrl + "\\" + res).toString()
    const $ = cheerio.load(s);
    // $('body').append('<script src="assets/js/vmain.js"></script>')
    $('#header').html('')
    fs.writeFileSync(fileUrl + "\\" + res, $.html(), () => {})
})


// $.html();