const express = require('express')
const userControll = require('../controller/user')

const router = express.Router();

//登录
router.post('/users/login', userControll.login)
//注册
router.post('/users', userControll.register)
//获取用户
router.get('/user', userControll.getCurrentUser)
//更新
router.post('/user', userControll.updateCurrents)

module.exports = router