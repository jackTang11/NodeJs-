const { User } = require('../model')
const jwt = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')

exports.login = async (req, res, next) => {
    try {
        const user = req.user.toJSON()

        const token = await jwt.sign({
            userId: user._id
        }, jwtSecret, {
            expiresIn: 60 * 60 * 24
        })

        delete user.password
        res.status(200).json({
            ...user,
            token
        })
    } catch (error) {
        next(error)
    }
}

exports.register = async (req, res, next) => {
    try {
        let user = User(req.body.user)
        await user.save()
        user = user.toJSON()
        delete user.password
        res.status(201).json({
            user
        })
    } catch (error) {
        next(error)
    }
}


exports.getCurrentUser = async (req, res, next) => {
    try {
        res.status(200).json({
            user: req.user
        })
    } catch (error) {
        next(error)
    }
}

// 更新当前登录用户
exports.updateCurrentUser = async (req, res, next) => {
    try {
        // 处理请求
        res.send('updateCurrentUser')
    } catch (err) {
        next(err)
    }
}

// 获取指定用户资料
exports.getUserProfile = async (req, res, next) => {
    try {
        // 处理请求
        res.send('getUserProfile')
    } catch (err) {
        next(err)
    }
}

// 关注用户
exports.followUser = async (req, res, next) => {
    try {
        // 处理请求
        res.send('followUser')
    } catch (err) {
        next(err)
    }
}

// 取消关注用户
exports.unfollowUser = async (req, res, next) => {
    try {
        // 处理请求
        res.send('unfollowUser')
    } catch (err) {
        next(err)
    }
}