/*
 * @Author: huangl
 * @Date: 2021-08-17 13:58:50
 * @LastEditors: huangl
 * @LastEditTime: 2021-08-17 17:46:55
 * @Description: file content
 * @FilePath: \test\middlewares\exception.js
 */
const {HttpException} = require('../core/http-exception')
const catchError = async (ctx, next) => {
    try {
        await next()
    } catch (error) {
        if(error instanceof HttpException) {
            ctx.body = {
                msg: error.msg,
                errorCode: error.errorCode,
                request: `${ctx.method} ${ctx.path}`
            }
            ctx.status = error.code
        }
    }
}
module.exports = catchError