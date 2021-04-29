/*
将英文转小驼峰 
 */
const filters = (str) => {
   
    let st = str.split(' ');
    let newStr = ''
    st.forEach((element, i) => {
         if (str.length > 12) {
newStr += (i === 0 ? element.substring(0, 1).toLowerCase() : element.substring(0, 1).toUpperCase()) + element.substring(1,3);
         }else{
newStr += (i === 0 ? element.substring(0, 1).toLowerCase() : element.substring(0, 1).toUpperCase()) + element.substring(1, element.length);
         }
    });
    return newStr;
}
module.exports = filters