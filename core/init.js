/*
 * @Author: huangl
 * @Date: 2021-08-17 13:58:50
 * @LastEditors: huangl
 * @LastEditTime: 2021-08-18 17:43:20
 * @Description: file content
 * @FilePath: \test\core\init.js
 */
const Router = require('@koa/router')
const requireDirectory = require('require-directory') // 自动化导入
class InitMasnager {
    static initCore(app) {
        InitMasnager.app = app
        InitMasnager.initLoadRouters()
        InitMasnager.loadConfig()
    }
    static loadConfig(path = '') {
        const configPath = path || `${process.cwd()}/config/config.js`
        const config = require(configPath)
        global.config = config
    }
    static initLoadRouters() {
        const apiDirectory = `${process.cwd()}/app`
        requireDirectory(module,apiDirectory,{
            visit:whenLoadModule
        })
        function whenLoadModule(obj) {
            if( obj instanceof Router ) {
                InitMasnager.app.use(obj.routes())
            }
        }
    }
}
module.exports = InitMasnager