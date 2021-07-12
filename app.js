const Koa = require('koa')
const app = new Koa()
app.listen(3000)

app.use( ()=> {
    console.log('哈哈哈哈哈')
})