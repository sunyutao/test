const Router = require('@koa/router')
const requireDirectory = require('require-directory') // 自动化导入
class InitMasnager {
    static initCore(app) {
        InitMasnager.app = app
        InitMasnager.initLoadRouters()
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