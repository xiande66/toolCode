const fs = require('fs')

const str = JSON.parse(fs.readFileSync('./tests.json').toString());

str.forEach((data) => {
    const name = data.address.split('/');

    function newName(param) {
        var paName = param[param.length - 1];
        paName = paName[0].toLocaleUpperCase() + paName.substring(1, paName.length)
        return param[param.length - 2] + paName;
    }
    let str2 = ''
    if (data.type == 'post') {
        str2 = fs.readFileSync('./model.js').toString().replace('$des', data.title).replace('$name', newName(name)).replace('$type', data.type).replace('$url', data.address);
    } else {
        str2 = fs.readFileSync('./model2.js').toString().replace('$des', data.title).replace('$name', newName(name)).replace('$type', data.type).replace('$url', data.address);
    }
    fs.appendFileSync('./api.js', str2, () => {})
})