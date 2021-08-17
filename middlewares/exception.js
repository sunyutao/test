/*
 * @Author: huangl
 * @Date: 2021-08-17 13:58:50
 * @LastEditors: huangl
 * @LastEditTime: 2021-08-17 14:26:13
 * @Description: file content
 * @FilePath: \test\middlewares\exception.js
 */
const catchError = async (cxt, next) => {
    try {
        await next()
    } catch (error) {
        cxt.body = '报错了11111111111！'
    }
}
module.exports = catchError