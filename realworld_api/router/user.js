const express = require('express')
const userControll = require('../controller/user')
const router = express.Router();
const userValidator = require('../validator/user')
const auth = require('../middleware/auth')

//登录
router.post('/users/login', userValidator.login, userControll.login)

//注册
router.post('/users', userValidator.register, userControll.register)


//获取用户
router.get('/user', auth, userControll.getCurrentUser)


//更新
router.post('/user', auth, userControll.updateCurrents)

module.exports = router