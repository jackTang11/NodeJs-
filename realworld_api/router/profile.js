const express = require('express')

const router = express.Router();

router.get('/:username', async (req, res, next) => {
    try {
        res.send('post /users/login')
    } catch (error) {
        next(error)
    }
})


router.post('/:username/flow', async (req, res, next) => {
    try {
        res.send('post profiles/:username/flow')
    } catch (error) {
        next(error)
    }
})


router.delete('/:username/flow', async (req, res, next) => {
    try {
        res.send('delete profiles/:username/flow')
    } catch (error) {
        next(error)
    }
})

module.exports = router;


