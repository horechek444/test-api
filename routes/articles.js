const router = require('express').Router();
const { validateObjId, validateArticleBody } = require('../middlewares/validations');
const {
  getArticles, createArticle, deleteArticle, updateArticle, getArticle,
} = require('../controllers/articles.js');

router.get('/', getArticles);
router.get('/:articleId', validateObjId, getArticle);
router.post('/', validateArticleBody, createArticle);
router.delete('/:articleId', validateObjId, deleteArticle);
router.patch('/:articleId', validateObjId, updateArticle);

module.exports = router;
