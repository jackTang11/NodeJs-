const express = require('express')
const articleCtrl = require('../controller/article')
const auth = require('../middleware/auth')

const router = express.Router();

router.get('/:slug', articleCtrl.getArticle)

// 创建文章
router.post('/', auth, articleCtrl.createArticle)

// 更新文章
router.put('/:slug', articleCtrl.updateArticle)

module.exports = router;


