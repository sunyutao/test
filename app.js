/*
 * @Author: huangl
 * @Date: 2021-08-17 13:58:50
 * @LastEditors: huangl
 * @LastEditTime: 2021-08-17 17:32:08
 * @Description: file content
 * @FilePath: \test\app.js
 */
const Koa = require('koa')
const parser = require('koa-bodyparser')
const InitManager = require('./core/init') // 初始化配置文件
const catchError = require('./middlewares/exception')
const app = new Koa()
app.use(parser())
app.use(catchError)
InitManager.initCore(app)
app.listen(3000)

