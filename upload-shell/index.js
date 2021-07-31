const fs = require('fs')
const request = require('request')

const shellArr = process.argv
shellArr.splice(0, 2) // 除去前 2 命令参数


// 为了保证图片是按照命令上传所以需要等待上传即上传完上一张图片获取到 url 后才可再上传下一张防止顺序错乱
// 这里使用异步 async 与 递归函数实现
// 同时可以用多文件上传，这里不给出

async function loopFn(index) {
    if (index === shellArr.length) {
        return
    }
    if (index === 0) {
        console.log('Upload Success:')
    }
    const url = await uploadImg(shellArr[index])
    console.log(url)
    loopFn(index + 1)
}


function uploadImg(val) {
    return new Promise((resolve, reject) => {
        request.post({
            url: 'http://120.27.242.14:9900/upload',
            formData: {
                file: fs.createReadStream(val)
            }
        }, async function(err, res, body) {
            if (err) { reject(err) }
            const obj = await JSON.parse(body)
            resolve(obj.url)
        })
    })
}

loopFn(0)