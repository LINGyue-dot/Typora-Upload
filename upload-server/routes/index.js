// 自动化读取 routes 目录下的文件路由中间件并引入 只是习惯为了扩展性
const fs = require('fs')
module.exports = (app) => {
    fs.readdirSync(__dirname).forEach(file => {
        if (file === 'index.js') { return }
        const route = require(`./${file}`)
        app.use(route.routes()).use(route.allowedMethods());
    })
}