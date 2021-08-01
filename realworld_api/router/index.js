const express = require('express')

const router = express.Router();

//用户相关的路由
router.use(require('./user'))

//用户资料的路由
router.use('/profiles', require('./user'))

module.exports = router;

