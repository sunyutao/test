const Router = require('@koa/router')
const router = new Router()
router.post('/book/latest',(ctx,next) => {
    console.log(ctx.request.query.a)
    ctx.body = {
        key: a
    }
})
module.exports = router