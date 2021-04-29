const {
    zh,
    tw_zh
} = require('./TW_zh_data');

const filter = (text, type) => {

    const zhs = zh(),
        tw_zhs = tw_zh();

    return type ?
        zhs.indexOf(text) != -1 ? tw_zhs[zhs.indexOf(text)] : text :
        tw_zhs.indexOf(text) != -1 ? zhs[tw_zhs.indexOf(text)] : text
}

const convert = (type, content) => {
    let str = '';
    /* 简化繁 */
    for (let item of content) {
        str += filter(item, type ? 1 : 0)
    }
    return str;
}
/* 
0 繁化简
1 简化繁
 */
module.exports = convert