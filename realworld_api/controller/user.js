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
        const user = User(req.body.user)
        user.save()
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