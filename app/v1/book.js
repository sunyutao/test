/*
 * @Author: huangl
 * @Date: 2021-07-13 08:35:51
 * @LastEditors: huangl
 * @LastEditTime: 2021-07-13 09:26:20
 * @Description: file content
 * @FilePath: \test\app\v1\book.js
 */
const Router = require('@koa/router')
const router = new Router()
router.post('/book/latest',(ctx,next) => {
    console.log(ctx.request.query.a)
    ctx.body = {
        key: aaa
    }
})
module.exports = router