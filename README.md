# Typora 上传图片 Nodejs 脚本 + Typora 上传图片 Nodejs koa 服务端



## 配置

### 客户端即电脑端

`/upload-shell/index.js` 即 node 脚本 

* 进入该目录 `npm i / yarn ` 安装依赖（主要是 request ）

* 修改 Typora 里面的偏好设置修改上传服务设置自定义命令 node 后面路径即为上述的 index.js 脚本路径

<img src="http://120.27.242.14:9900/uploads/upload_9e8c21a361fa4e4387f385b30c106475.png" alt="image-20210731211810079" style="zoom:50%;" />



### 服务端

`/upload-server`  下即为 koa 框架的服务端 `/upload-server/index.js` 即为入口文件

* 先 `npm i / yarn ` 安装依赖
* 利用 `screen` 或者 `pm2` 维护进程工具运行 `node index.js` 即部署完成
* 同时注意运营商的安全组问题，是否对你的服务器进行防火墙控制。例如阿里云的安全组开发该项目的 `9090` 端口



注意：图片是存放在 `/upload-server/public/uploads` 目录下，而且是通过 `koa-static` 进行暴露。可以自己优化为 `tomcat` 等其他工具暴露

 



### 注意

如有 bug 或者其他问题可开 `issue` 或者邮件联系





## 开发



### 需求

参考官网 https://support.typora.io/Upload-Image/#custom

即 Typora 运行的脚本即为 `shell ` + `图片绝对路径`

例如 `node index.js C:/temp.jpg C:/temps.jpg`

那么脚本所需要的功能就很清晰了即

​	获取命令行所指明的绝对路径图片并将图片发送给服务端

服务端就更简单：

​	接收到图片文件并将存储在服务器上并暴露在公网上同时返回图片 url

源码中注解都较完全可以直接参考

