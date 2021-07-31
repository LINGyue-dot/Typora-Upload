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