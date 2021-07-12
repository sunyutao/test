const Koa = require('koa')
const InitManager = require('./core/init') // 初始化配置文件
const catchError = require('./middlewares/exception')
const app = new Koa()
app.use(catchError)
InitManager.initCore(app)
app.listen(3000)

