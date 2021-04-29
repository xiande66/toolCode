import request from '@/utils/request'

export function getFriendList() {
    return request({
        url: '/QQ/getFriend',
        method: 'get'
    })
}

export function send_like(data) {
    return request({
        url: '/QQ/send_like',
        method: 'post',
        data
    })
}

export function send_msg(data) {
    return request({
        url: '/QQ/sendMsg',
        method: 'post',
        data
    })
}
