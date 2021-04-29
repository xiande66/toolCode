const puppeteer = require('puppeteer');

function sleep(param) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, param || 3000)
    })
}
/* 
有道翻译
 */
const translate = (content) => {
    content = content.join('\n')
    return new Promise(async (resolve, reject) => {
        const browser = await puppeteer.launch({
            headless: true
        });
        const page = await browser.newPage();

        await page.goto('https://fanyi.youdao.com/', {
            timeout: 0
        });

        await page.setViewport({
            height: 1920,
            width: 1080
        });
        await page.focus('#inputOriginal');
        await page.keyboard.sendCharacter(content);
        await page.click('#transMachine');

        await sleep(5000)
        
        const afterValue = await page.evaluate(async () => {
            let str = ''
            document.querySelectorAll('#transTarget p span').forEach((data) => {
                str += data.innerText + '\n'
            });
            return str;
        })
        resolve(afterValue)

        browser.close();
    })
};

module.exports = translate