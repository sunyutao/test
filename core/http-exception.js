/*
 * @Author: huangl
 * @Date: 2021-08-17 17:21:13
 * @LastEditors: huangl
 * @LastEditTime: 2021-08-17 17:30:29
 * @Description: file content
 * @FilePath: \test\core\http-exception.js
 */
class HttpException extends Error {
    constructor(msg="服务器异常",errorCode=10000,code=400) {
        super()
        this.msg = msg
        this.errorCode = errorCode
        this.code = code
    }
}
module.exports = {
    HttpException
}