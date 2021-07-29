const mongoose = require('mongoose');
var Schema = mongoose.schema

//连接数据库test   test 如果不存在会自动创建
mongoose.connect('mongodb://localhost/testUser');

//设计表
var userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
})

//将文档结构发布为模型
var User = mongoose.model('User', userSchema);

//操作数据库

//增加
var admin = new User({
    username: 'jack',
    email: 'tanglinyuan@bitkeep.com'
})
admin.save(function (err, ret) {
    if (err) {
        console.log('保存失败');
    } else {
        console.log('保存成功');
    }
});

//查询
User.find(function(err,ret) {

})

//查询所有
User.find({username:'jack'},function(err,ret) {

})

//查询单个
User.findOne({username:'jack'},function(err,ret) {

})


var p1 = new Promise( function (resolve, reject) {
    

})


p1.then(function (data) {
 
})