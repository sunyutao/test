const catchError = async (cxt, next) => {
    try {
        await next()
    } catch (error) {
        cxt.body = '报错了！'
    }
}
module.exports = catchError