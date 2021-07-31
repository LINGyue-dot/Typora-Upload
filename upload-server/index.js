const Koa = require('koa')
const KoaBody = require('koa-body')
const KoaStatic = require('koa-static') // 用于生成返回链接
const cors = require('koa-cors')

const path = require('path')

const router = require('./routes')

const app = new Koa()

app.use(KoaStatic(path.join(__dirname, 'public'))) // 开启 /public 下的静态文件夹使得可用 http 来进行访问
app.use(cors())

// 简单的错误处理中间件
const handleError = async(ctx, next) => {
    try {
        await next()
    } catch (err) {
        console.log(err)
        ctx.status = err.status || err.statusCode || 500
        ctx.body = {
            message: err
        }
    }
}

app.use(handleError)

app.use(KoaBody({
    multipart: true,
    formidable: {
        uploadDir: path.join(__dirname, 'public/uploads'),
        keepExtensions: true
    }
}))

router(app)
app.listen(9900)