export function selectMyClientByName(data) {
    /* 我的客户-查询（按名称） */
    return request({
        url: "/client/selectMyClientByName",
        method: "get",
        data
    })
}
export function selectMyClientByMulti(data) {
    /* 我的客户-查询（多维度） */
    return request({
        url: "/client/selectMyClientByMulti",
        method: "get",
        data
    })
}
export function create(data) {
    /* 我的客户-新增 */
    return request({
        url: "/client/create",
        method: "post",
        data
    })
}
export function update(data) {
    /* 我的客户-更新 */
    return request({
        url: "/client/update",
        method: "put",
        data
    })
}
export function clientDelete(data) {
    /* 我的客户-删除 */
    return request({
        url: "/client/delete",
        method: "delete",
        data
    })
}
export function selectMyClientById(data) {
    /* 我的客户-查询（按主键） */
    return request({
        url: "/client/selectMyClientById",
        method: "put",
        data
    })
}
export function appoint(data) {
    /* 我的客户-委任（客户经理） */
    return request({
        url: "/client/appoint",
        method: "post",
        data
    })
}
export function selectRegionalClientByName(data) {
    /* 区域客户-查询（按名称） */
    return request({
        url: "/client/selectRegionalClientByName",
        method: "get",
        data
    })
}
export function selectRegionalClientByMulti(data) {
    /* 区域客户-查询（多维度） */
    return request({
        url: "/client/selectRegionalClientByMulti",
        method: "get",
        data
    })
}
export function selectRegionalClientById(data) {
    /* 区域客户-查询（按主键） */
    return request({
        url: "/client/selectRegionalClientById",
        method: "put",
        data
    })
}
export function selectAllClientByName(data) {
    /* 全部客户-查询（按名称） */
    return request({
        url: "/client/selectAllClientByName",
        method: "get",
        data
    })
}
export function selectAllClientByMulti(data) {
    /* 全部客户-查询（多维度） */
    return request({
        url: "/client/selectAllClientByMulti",
        method: "get",
        data
    })
}
export function selectAllClientById(data) {
    /* 全部客户-查询（按主键） */
    return request({
        url: "/client/selectAllClientById",
        method: "put",
        data
    })
}
export function selectMyContactsByName(data) {
    /* 我的联系人-查询（按名称） */
    return request({
        url: "/contacts/selectMyContactsByName",
        method: "get",
        data
    })
}
export function selectMyContactsByMulti(data) {
    /* 我的联系人-查询（多维度） */
    return request({
        url: "/contacts/selectMyContactsByMulti",
        method: "get",
        data
    })
}
export function create(data) {
    /* 我的联系人-新增 */
    return request({
        url: "/contacts/create",
        method: "get",
        data
    })
}
export function update(data) {
    /* 我的联系人-更新 */
    return request({
        url: "/contacts/update",
        method: "get",
        data
    })
}
export function contactsDelete(data) {
    /* 我的联系人-删除 */
    return request({
        url: "/contacts/delete",
        method: "get",
        data
    })
}
export function selectMyContactsById(data) {
    /* 我的联系人-查询（按主键） */
    return request({
        url: "/contacts/selectMyContactsById",
        method: "get",
        data
    })
}
export function selectRegionalContactsByName(data) {
    /* 区域联系人-查询（按名称） */
    return request({
        url: "/contacts/selectRegionalContactsByName",
        method: "get",
        data
    })
}
export function selectRegionalContactsByMulti(data) {
    /* 区域联系人-查询（多维度） */
    return request({
        url: "/contacts/selectRegionalContactsByMulti",
        method: "get",
        data
    })
}
export function selectRegionalContactsById(data) {
    /* 区域联系人-查询（按主键） */
    return request({
        url: "/contacts/selectRegionalContactsById",
        method: "get",
        data
    })
}
export function selectAllContactsByName(data) {
    /* 全部联系人-查询（按名称） */
    return request({
        url: "/contacts/selectAllContactsByName",
        method: "get",
        data
    })
}
export function selectAllContactsByMulti(data) {
    /* 全部联系人-查询（多维度） */
    return request({
        url: "/contacts/selectAllContactsByMulti",
        method: "get",
        data
    })
}
export function selectAllContactsById(data) {
    /* 全部联系人-查询（按主键） */
    return request({
        url: "/contacts/selectAllContactsById",
        method: "get",
        data
    })
}
export function handoverSelect(data) {
    /* 客户交接-查询 */
    return request({
        url: "/client/handoverSelect",
        method: "get",
        data
    })
}
export function handoverView(data) {
    /* 客户交接-查看 */
    return request({
        url: "/client/handoverView",
        method: "get",
        data
    })
}
export function handover(data) {
    /* 客户交接-交接 */
    return request({
        url: "/client/handover",
        method: "get",
        data
    })
}
export function create(data) {
    /* 组织架构新增 */
    return request({
        url: "/organization/create",
        method: "post",
        data
    })
}
export function update(data) {
    /* 组织架构修改 */
    return request({
        url: "/organization/update",
        method: "post",
        data
    })
}
export function organizationDelete(data) {
    /* 组织架构删除 */
    return request({
        url: "/organization/delete",
        method: "delete",
        data
    })
}
export function selectClientRegion(data) {
    /* 组织架构-客户区域查询 */
    return request({
        url: "/organization/selectClientRegion",
        method: "get",
        data
    })
}
export function selectClientByRegionAndName(data) {
    /* 组织架构-客户查询（按区域和名称） */
    return request({
        url: "/organization/selectClientByRegionAndName",
        method: "get",
        data
    })
}
export function selectByClient(data) {
    /* 组织架构-查询（按客户） */
    return request({
        url: "/organization/selectByClient",
        method: "get",
        data
    })
}
export function selectInfoLog(data) {
    /* 客户日志-客户信息日志查询 */
    return request({
        url: "/clientLog/selectInfoLog",
        method: "get",
        data
    })
}
export function exportInfoLog(data) {
    /* 客户日志-客户信息日志导出 */
    return request({
        url: "/clientLog/exportInfoLog",
        method: "get",
        data
    })
}
export function selectSetLog(data) {
    /* 客户日志-客户设置日志查询 */
    return request({
        url: "/clientLog/selectSetLog",
        method: "get",
        data
    })
}
export function exportSetLog(data) {
    /* 客户日志-客户设置日志导出 */
    return request({
        url: "/clientLog/exportSetLog",
        method: "get",
        data
    })
}