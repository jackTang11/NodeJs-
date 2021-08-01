const express = require('express')

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        res.send('get /')
    } catch (error) {
        next(error)
    }
})


router.get('/feed', async (req, res, next) => {
    try {
        res.send('post feed')
    } catch (error) {
        next(error)
    }
})


router.get('/:slug', async (req, res, next) => {
    try {
        res.send('获取文章')
    } catch (error) {
        next(error)
    }
})

module.exports = router;


