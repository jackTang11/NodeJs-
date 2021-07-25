### Node安装
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
- 安装 NVM ：
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
### Node 输出
```
console.log('xxxx') 打印
console.clear()  清空
```
### 常见的全局对象
```
+ __dirname   文件夹路径
+ __filename   文件路径
+ process  运行环境 参数信息
+ global 全局对象

```



