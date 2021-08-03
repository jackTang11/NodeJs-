### Node 安装

> Node 版本管理工具 nvm 或者 n

- 安装 N ：

```
# 安装工具N
npm install -g n

# 查看安装的版本
n --version

#安装最新的lts 版本
sudo n lts

#安装最新的版本
sudo n latest

#查看所有的版本
sudo n

# 指定安装版本
sudo n v14.13.1
```

> 安装 NVM ：

```
# 安装工具NVM
brew install nvm

# 配置环境变量
$ cd ~
$ vim .bash_profile
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh

#重新source
$ source .bash_profile

# 查看 所有的node可用版本
$ nvm ls-remote

# 下载你想要的版本
$ nvm install 14.13.1

# 使用指定版本的node
$ nvm use 14.13.1

# 每次启动终端都使用该版本的node  
$ nvm alias default 14.13.1

# 配置镜像
nvm node_mirror: https://npm.taobao.org/mirrors/node/
nvm npm_mirror: https://npm.taobao.org/mirrors/npm/
```

> Node 输出

```
console.log('xxxx') 打印
console.clear()  清空
```

> 常见的全局对象

```
+ __dirname   文件夹路径
+ __filename   文件路径
+ process  运行环境 参数信息
+ global 全局对象

```

> 关于 exports 和 module.exports

```
在源码中看到
module.exports = exports
如果 module.exports 不在引用 exports，那么 exports 也没有任何作用了
```

> 修改代码自动重启

```
cnpm i -g nodemon
nodemon --version
# 使用 nodemon 启动，例如
nodemon xxx.js
```

### Express

> express 安装

```
cnpm i -g express
```

> express 请求

```
app.get('/' , (req , res)=>{
   res.send('hello from simple server :)')
})

app.post('/' , (req , res)=>{
   res.send('hello from simple server :)')
})
```

> Express 静态

```
# 当以/public/开头的时候，去./public/目录中找对应的文件
# 表示前者替换了后者的路径
app.use('/public/', express.static('./public/'));

# 省略第一个参数的时候，可以通过省略/public/去访问
app.use(express.static('public'));

# 包装路由

1.创建一个路由
var router = express.Router()

2.把路由挂载到router的路由上去 应该放在最后面
app.use(router)

```

> mac osx 下安装 MongoDB 方法

```
下载地址：https://www.mongodb.com/download-center/community

# 进入 /usr/local
cd /usr/local

# 下载
sudo curl -O https://fastdl.mongodb.org/osx/mongodb-osx-ssl-x86_64-4.0.6.tgz

# 解压
sudo tar -zxvf mongodb-osx-ssl-x86_64-4.0.6.tgz

# 重命名为 mongodb 目录

sudo mv mongodb-osx-ssl-x86_64-4.0.6 mongodb安装完毕后，可以把 MongoDB 的二进制命令文件目录（安装目录/bin）添加到 PATH 路径中：
vim ~/.bash_profile

#把以下代码复制到.bash_profile中
export PATH=/usr/local/mongodb/bin:$PATH

测试
mongod --version


mongodb 非常灵活，不像mysql数据那样，创建数据库，表，设计数据库。
mongo 数据库只需要你插入一个实体model

```

> art-template 模板引擎

```
art-template 可以将node静态目录下的html 渲染出去

安装
npm install --save art-template
npm install --save express-art-template

配置
// 表示将会去渲染以art 结尾的文件
app.engine('art', require('express-art-template'));

//默认是在view中查找文件
app.set('view', {
    debug: process.env.NODE_ENV !== 'production'
});

使用
res.render('index.art', {
        user: {
            name: 'aui',
            tags: ['art', 'template', 'nodejs']
        }
    });
```

> Express

```
中间件其实就是可以访问请求对象 响应对象以及Next（）方法的函数,一定要注意顺序

//利用中间件，获取log 信息
// 中间件的顺序很重
// 中间件的三个参数  req,res,next
app.use((req,res,next) => {
   console.log(req.method,req.url,Date.now());
   next()//继续执行
})


express
应用程序级别的中间件
限定请求方法加请求路径
app.use(
    (req,res,next) => {},
    (req,res,next) => {}
)

//挂载路由
// app.use(router)

//给路由限定前缀
app.use('/todos',router)

//错误处理中间件
app.use((err, req, res, next) => {

})

```
