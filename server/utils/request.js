const request = require('request')

const server = (params) => {
    return new Promise((resolve, reject) => {
        const uri = 'http://47.103.217.62:3000'
        params.url = `${uri}${params.url}?access_token=4087f25192e111ebad6429abb08f2c5afd8df41851494bdab85372636fbb09e6`
        request({
            timeout: 5000,
            ...params
        }, (err, res, body) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

module.exports = server