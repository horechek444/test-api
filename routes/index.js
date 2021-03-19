const router = require('express').Router();
const articleRouter = require('./articles.js');

router.use('/articles', articleRouter);

module.exports = router;
