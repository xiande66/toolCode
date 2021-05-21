export function menuSelectByName() {
    /* 菜单查询（按名称） */
    return request({
        url: '/menu/selectByName',
        method: 'get'
    })
}
export function menuSelectById() {
    /* 菜单查询（按ID） */
    return request({
        url: '/menu/selectById',
        method: 'get'
    })
}
export function newCreate(data) {
    /* 菜单新增 */
    return request({
        url: '/new/create',
        method: 'post',
        data
    })
}
export function menuUpdate() {
    /* 菜单更新 */
    return request({
        url: '/menu/update',
        method: 'put'
    })
}
export function menuDelete() {
    /* 菜单删除 */
    return request({
        url: '/menu/delete',
        method: 'delete'
    })
}
export function menuUpdateOrder() {
    /* 菜单顺序修改 */
    return request({
        url: '/menu/updateOrder',
        method: 'put'
    })
}
export function userSelect() {
    /* 用户查询 */
    return request({
        url: '/user/select',
        method: 'get'
    })
}
export function userSelectById() {
    /* 用户查询（按ID） */
    return request({
        url: '/user/selectById',
        method: 'get'
    })
}
export function userCreate(data) {
    /* 用户新增 */
    return request({
        url: '/user/create',
        method: 'post',
        data
    })
}
export function userUpdate() {
    /* 用户更新 */
    return request({
        url: '/user/update',
        method: 'put'
    })
}
export function userDelete() {
    /* 用户停用 */
    return request({
        url: '/user/delete',
        method: 'put'
    })
}
export function userSelectAuthorityById() {
    /* 用户权限查询 */
    return request({
        url: '/user/selectAuthorityById',
        method: 'get'
    })
}
export function userUpdateAuthorityById() {
    /* 用户权限修改 */
    return request({
        url: '/user/updateAuthorityById',
        method: 'put'
    })
}
export function userUserInfoExport() {
    /* 用户信息导出 */
    return request({
        url: '/user/userInfoExport',
        method: 'get'
    })
}
export function userSelectOrganization() {
    /* 组织架构查询 */
    return request({
        url: '/user/selectOrganization',
        method: 'get'
    })
}
export function userSelectOrganizationById() {
    /* 组织架构查询（按ID） */
    return request({
        url: '/user/selectOrganizationById',
        method: 'get'
    })
}
export function userCreateOrganization(data) {
    /* 组织架构新增 */
    return request({
        url: '/user/createOrganization',
        method: 'post',
        data
    })
}
export function userUpdateOrganization() {
    /* 组织架构修改 */
    return request({
        url: '/user/updateOrganization',
        method: 'put'
    })
}
export function userDeleteOrganization() {
    /* 组织架构删除 */
    return request({
        url: '/user/deleteOrganization',
        method: 'delete'
    })
}
export function positionSelectPosition() {
    /* 职位查询 */
    return request({
        url: '/position/selectPosition',
        method: 'get'
    })
}
export function positionSelectPositionById() {
    /* 职位查询（按ID） */
    return request({
        url: '/position/selectPositionById',
        method: 'get'
    })
}
export function positionCreatePosition(data) {
    /* 职位新增 */
    return request({
        url: '/position/createPosition',
        method: 'post',
        data
    })
}
export function positionUpdatePosition() {
    /* 职位更新 */
    return request({
        url: '/position/updatePosition',
        method: 'put'
    })
}
export function positionDeletePosition() {
    /* 职位删除 */
    return request({
        url: '/position/deletePosition',
        method: 'delete'
    })
}
export function positionSelectRoleAndFuncByPosition() {
    /* 职位关联角色及功能查询 */
    return request({
        url: '/position/selectRoleAndFuncByPosition',
        method: 'get'
    })
}
export function positionSelectRoleByPosition() {
    /* 职位关联角色查询 */
    return request({
        url: '/position/selectRoleByPosition',
        method: 'get'
    })
}
export function positionUpdateRoleByPosition() {
    /* 职位关联角色修改 */
    return request({
        url: '/position/updateRoleByPosition',
        method: 'put'
    })
}
export function positionPositionInfoExport() {
    /* 职位信息导出 */
    return request({
        url: '/position/positionInfoExport',
        method: 'get'
    })
}
export function roleSelectRole() {
    /* 角色查询 */
    return request({
        url: '/role/selectRole',
        method: 'get'
    })
}
export function roleSelectRoleById() {
    /* 角色查询（按ID） */
    return request({
        url: '/role/selectRoleById',
        method: 'get'
    })
}
export function roleCreateRole(data) {
    /* 角色新增 */
    return request({
        url: '/role/createRole',
        method: 'post',
        data
    })
}
export function roleUpdateRole() {
    /* 角色修改 */
    return request({
        url: '/role/updateRole',
        method: 'put'
    })
}
export function roleDeleteRole() {
    /* 角色删除 */
    return request({
        url: '/role/deleteRole',
        method: 'delete'
    })
}
export function roleSelectFunctionByRoleId() {
    /* 查看角色权限 */
    return request({
        url: '/role/selectFunctionByRoleId',
        method: 'get'
    })
}
export function roleUpdateFunctionByRoleId() {
    /* 编辑角色权限 */
    return request({
        url: '/role/updateFunctionByRoleId',
        method: 'put'
    })
}
export function roleRoleInfoExport() {
    /* 角色导出 */
    return request({
        url: '/role/roleInfoExport',
        method: 'get'
    })
}
export function functionSelectFunction() {
    /* 功能查询 */
    return request({
        url: '/function/selectFunction',
        method: 'get'
    })
}
export function functionSelectFunctionById() {
    /* 功能查询（按ID） */
    return request({
        url: '/function/selectFunctionById',
        method: 'get'
    })
}
export function functionCreateFunction(data) {
    /* 功能新增 */
    return request({
        url: '/function/createFunction',
        method: 'post',
        data
    })
}
export function functionUpdateFunction() {
    /* 功能修改 */
    return request({
        url: '/function/updateFunction',
        method: 'put'
    })
}
export function functionDeleteFunction() {
    /* 功能删除 */
    return request({
        url: '/function/deleteFunction',
        method: 'delete'
    })
}
export function paramSelectParam() {
    /* 查询参数(按条件) */
    return request({
        url: '/param/selectParam',
        method: 'get'
    })
}
export function paramSelectParamById() {
    /* 查询参数（按ID） */
    return request({
        url: '/param/selectParamById',
        method: 'get'
    })
}
export function paramCreateParam(data) {
    /* 新增参数 */
    return request({
        url: '/param/createParam',
        method: 'post',
        data
    })
}
export function paramUpdateParam() {
    /* 更新参数 */
    return request({
        url: '/param/updateParam',
        method: 'put'
    })
}
export function paramDeleteParam() {
    /* 删除参数 */
    return request({
        url: '/param/deleteParam',
        method: 'delete'
    })
}
export function paramSelectParamOption() {
    /* 查询参数选项 */
    return request({
        url: '/param/selectParamOption',
        method: 'get'
    })
}
export function paramSelectOption() {
    /* 查询选项信息 */
    return request({
        url: '/param/selectOption',
        method: 'get'
    })
}
export function paramCreateParamOption(data) {
    /* 新增参数选项 */
    return request({
        url: '/param/createParamOption',
        method: 'post',
        data
    })
}
export function paramUpdateParamOption() {
    /* 更新参数选项 */
    return request({
        url: '/param/updateParamOption',
        method: 'put'
    })
}
export function paramDeleteParamOption() {
    /* 删除参数选项 */
    return request({
        url: '/param/deleteParamOption',
        method: 'delete'
    })
}
export function noticeSelect() {
    /* 查询公告(按条件) */
    return request({
        url: '/notice/select',
        method: 'get'
    })
}
export function noticeSelectById() {
    /* 查询公告（按ID） */
    return request({
        url: '/notice/selectById',
        method: 'get'
    })
}
export function noticeCreate(data) {
    /* 新增公告 */
    return request({
        url: '/notice/create',
        method: 'post',
        data
    })
}
export function noticeUpdate() {
    /* 修改公告 */
    return request({
        url: '/notice/update',
        method: 'put'
    })
}
export function noticeDelete() {
    /* 删除公告 */
    return request({
        url: '/notice/delete',
        method: 'delete'
    })
}
export function operateLogSelect() {
    /* 系统日志查询功能 */
    return request({
        url: '/operateLog/select',
        method: 'get'
    })
}
export function operateLogExport() {
    /* 系统日志导出功能 */
    return request({
        url: '/operateLog/export',
        method: 'get'
    })
}
export function operateLogSelect() {
    /* 权限日志查询功能 */
    return request({
        url: '/operateLog/select',
        method: 'get'
    })
}
export function operateLogExport() {
    /* 权限日志导出功能 */
    return request({
        url: '/operateLog/export',
        method: 'get'
    })
}
export function loginLogSelect() {
    /* 登录日志查询功能 */
    return request({
        url: '/loginLog/select',
        method: 'get'
    })
}
export function loginLogExport() {
    /* 登录日志导出功能 */
    return request({
        url: '/loginLog/export',
        method: 'get'
    })
}
export function smLogin() {
    /* 系统登录接口 */
    return request({
        url: '/sm/login',
        method: 'get'
    })
}