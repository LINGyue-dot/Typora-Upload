const Router = require('koa-router')
const router = new Router({ prefix: '/upload' })
const path = require('path')

router.post('/', (ctx) => {
    const file = ctx.request.files.file;
    const basename = path.basename(file.path)
    ctx.body = { url: `${ctx.origin}/uploads/${basename}` }

})

module.exports = router