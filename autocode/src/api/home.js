import request from '@/utils/request'

export function getApiList(){
    return request({
        url:'/users',
        method:'get'
    })
}

export function createFile(data){
    return request({
        url:'/create',
        method:'post',
        data
    })
}
export function getFileType(){
    return request({
        url: '/create/fileType',
        method:'get'
    })
}
export function geti18(data){
    return request({
        url: '/tff',
        method:'post',
        data
    })
}