const { body, validationResult } = require('express-validator')
const { User } = require('../model')
const validator = require('../middleware/validator')
const md5 = require('../util/md5')

exports.register = validator([
    body('user.username')
        .notEmpty().withMessage('用户名不能为空')
        .custom(async username => { //自定义验证，查询是否存在用户名，此查询操作为异步
            const user = await User.findOne({ username })
            console.log('================');
            console.log(username);
            if (user) { //如果存在，直接返回
                return Promise.reject('用户名已存在')
            }
        }),
    body('user.password').notEmpty().withMessage('密码不能为空'),
    body('user.email').notEmpty().withMessage('邮箱不能为空')
        .bail()//上面都可以通过，才能继续走下面
        .custom(async email => { //自定义验证，查询是否存在邮箱，此查询操作为异步
            const user = await User.findOne({ email })
            if (user) { //如果存在，直接返回
                return Promise.reject('邮箱已存在')
            }
        })
])

exports.login = [
    validator(
        [
            body('user.email').notEmpty().withMessage('用户名不能为空'),
            body('user.password').notEmpty().withMessage('密码不能为空')
        ]
    ),

    validator([
        body('user.email').custom(async (email, { req }) => { //自定义验证，查询是否存在用户名，此查询操作为异步
            const user = await User.findOne({ email })
            if (!user) { //如果存在，直接返回
                return Promise.reject('用户名不存在')
            }
            req.user = user
        }),
    ]),
    validator([
        body('user.password').custom(async password => { //自定义验证，查询是否存在邮箱，此查询操作为异步
            console.log(req.user);
            if (md5(password) !== req.user.password) { //如果存在，直接返回
                return Promise.reject('密码错误')
            }
        })
    ])
]