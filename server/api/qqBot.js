const request = require('../utils/request')

module.exports = {
    send_private_msg: (form) => {
        /*  发送私聊消息 */
        return request({
            url: '/send_private_msg',
            method: 'post',
            form
        })
    },
    send_group_msg: (form) => {
        /*  发送群消息 */
        return request({
            url: '/send_group_msg',
            method: 'post',
            form
        })
    },
    send_msg: (form) => {
        /*  发送消息 */
        return request({
            url: '/send_msg',
            method: 'post',
            form
        })
    },
    delete_msg: (form) => {
        /*  撤回消息 */
        return request({
            url: '/delete_msg',
            method: 'post',
            form
        })
    },
    get_msg: (form) => {
        /*  获取消息 */
        return request({
            url: '/get_msg',
            method: 'post',
            form
        })
    },
    get_forward_msg: (form) => {
        /*  获取合并转发消息 */
        return request({
            url: '/get_forward_msg',
            method: 'post',
            form
        })
    },
    send_like: (form) => {
        /*  发送好友赞 */
        return request({
            url: '/send_like',
            method: 'post',
            form
        })
    },
    set_group_kick: (form) => {
        /*  群组踢人 */
        return request({
            url: '/set_group_kick',
            method: 'post',
            form
        })
    },
    set_group_ban: (form) => {
        /*  群组单人禁言 */
        return request({
            url: '/set_group_ban',
            method: 'post',
            form
        })
    },
    set_group_anonymous_ban: (form) => {
        /*  群组匿名用户禁言 */
        return request({
            url: '/set_group_anonymous_ban',
            method: 'post',
            form
        })
    },
    set_group_whole_ban: (form) => {
        /*  群组全员禁言 */
        return request({
            url: '/set_group_whole_ban',
            method: 'post',
            form
        })
    },
    set_group_admin: (form) => {
        /*  群组设置管理员 */
        return request({
            url: '/set_group_admin',
            method: 'post',
            form
        })
    },
    set_group_anonymous: (form) => {
        /*  群组匿名 */
        return request({
            url: '/set_group_anonymous',
            method: 'post',
            form
        })
    },
    set_group_card: (form) => {
        /*  设置群名片（群备注） */
        return request({
            url: '/set_group_card',
            method: 'post',
            form
        })
    },
    set_group_name: (form) => {
        /*  设置群名 */
        return request({
            url: '/set_group_name',
            method: 'post',
            form
        })
    },
    set_group_leave: (form) => {
        /*  退出群组 */
        return request({
            url: '/set_group_leave',
            method: 'post',
            form
        })
    },
    set_group_special_title: (form) => {
        /*  设置群组专属头衔 */
        return request({
            url: '/set_group_special_title',
            method: 'post',
            form
        })
    },
    set_friend_add_request: (form) => {
        /*  处理加好友请求 */
        return request({
            url: '/set_friend_add_request',
            method: 'post',
            form
        })
    },
    set_group_add_request: (form) => {
        /*  处理加群请求／邀请 */
        return request({
            url: '/set_group_add_request',
            method: 'post',
            form
        })
    },
    get_login_info: (form) => {
        /*  获取登录号信息 */
        return request({
            url: '/get_login_info',
            method: 'post',
            form
        })
    },
    get_stranger_info: (form) => {
        /*  获取陌生人信息 */
        return request({
            url: '/get_stranger_info',
            method: 'post',
            form
        })
    },
    get_friend_list: (form) => {
        /*  获取好友列表 */
        return request({
            url: '/get_friend_list',
            method: 'post',
            form
        })
    },
    get_group_info: (form) => {
        /*  获取群信息 */
        return request({
            url: '/get_group_info',
            method: 'post',
            form
        })
    },
    get_group_list: (form) => {
        /*  获取群列表 */
        return request({
            url: '/get_group_list',
            method: 'post',
            form
        })
    },
    get_group_member_info: (form) => {
        /*  获取群成员信息 */
        return request({
            url: '/get_group_member_info',
            method: 'post',
            form
        })
    },
    get_group_member_list: (form) => {
        /*  获取群成员列表 */
        return request({
            url: '/get_group_member_list',
            method: 'post',
            form
        })
    },
    get_group_honor_info: (form) => {
        /*  获取群荣誉信息 */
        return request({
            url: '/get_group_honor_info',
            method: 'post',
            form
        })
    },
    get_cookies: (form) => {
        /*  获取 Cookies */
        return request({
            url: '/get_cookies',
            method: 'post',
            form
        })
    },
    get_csrf_token: (form) => {
        /*  获取 CSRF Token */
        return request({
            url: '/get_csrf_token',
            method: 'post',
            form
        })
    },
    get_credentials: (form) => {
        /*  获取 QQ 相关接口凭证 */
        return request({
            url: '/get_credentials',
            method: 'post',
            form
        })
    },
    get_record: (form) => {
        /*  获取语音 */
        return request({
            url: '/get_record',
            method: 'post',
            form
        })
    },
    get_image: (form) => {
        /*  获取图片 */
        return request({
            url: '/get_image',
            method: 'post',
            form
        })
    },
    can_send_image: (form) => {
        /*  检查是否可以发送图片 */
        return request({
            url: '/can_send_image',
            method: 'post',
            form
        })
    },
    can_send_record: (form) => {
        /*  检查是否可以发送语音 */
        return request({
            url: '/can_send_record',
            method: 'post',
            form
        })
    },
    get_status: (form) => {
        /*  获取运行状态 */
        return request({
            url: '/get_status',
            method: 'post',
            form
        })
    },
    get_version_info: (form) => {
        /*  获取版本信息 */
        return request({
            url: '/get_version_info',
            method: 'post',
            form
        })
    },
    set_restart: (form) => {
        /*  重启 OneBot 实现 */
        return request({
            url: '/set_restart',
            method: 'post',
            form
        })
    },
    clean_cache: (form) => {
        /*  清理缓存 */
        return request({
            url: '/clean_cache',
            method: 'post',
            form
        })
    }
}