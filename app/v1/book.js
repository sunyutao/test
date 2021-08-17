/*
 * @Author: huangl
 * @Date: 2021-07-13 08:35:51
 * @LastEditors: huangl
 * @LastEditTime: 2021-08-17 17:37:31
 * @Description: file content
 * @FilePath: \test\app\v1\book.js
 */
const Router = require('@koa/router')
const {HttpException} = require('../../core/http-exception')
const router = new Router()
router.post('/book/latest',(ctx,next) => {
    var body = ctx.request.body
    var query = ctx.request.query
    console.log(body,query)
    if(true) {
        const error = new HttpException('为什么错误',10001,400)
        throw error
    }
    ctx.body = {
        key: 'aaa'
    }
})
module.exports = router