const { User } = require('../model')

exports.login = async (req, res, next) => {
    try {
        res.send('post login')
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
        JSON.parse('133')
        res.send('post getCurrentUser')
    } catch (error) {
        next(error)
    }
}

exports.updateCurrents = async (req, res, next) => {
    try {
        res.send('post updateCurrents')
    } catch (error) {
        next(error)
    }
}