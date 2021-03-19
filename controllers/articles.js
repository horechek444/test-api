const Article = require('../models/article');
const NotFoundError = require('../errors/not-found-err');
const {
  BAD_REQUEST_ERROR_CODE,
  INCORRECT_ID_MESSAGE,
  CAST_ERROR,
  VALIDATION_ERROR,
} = require('../utils/utils');

const getArticles = async (req, res, next) => {
  try {
    const articles = await Article.find({});
    res.send(articles);
  } catch (err) {
    if (err.name === CAST_ERROR) {
      err.statusCode = BAD_REQUEST_ERROR_CODE;
    }
    next(err);
  }
};

const getArticle = async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.articleId);
    if (!article) {
      throw new NotFoundError(INCORRECT_ID_MESSAGE);
    } else {
      res.send(article);
    }
  } catch (err) {
    if (err.name === CAST_ERROR) {
      err.statusCode = BAD_REQUEST_ERROR_CODE;
    }
    next(err);
  }
};

const createArticle = async (req, res, next) => {
  try {
    const { title, text } = req.body;
    const newArticle = await Article.create({ title, text });
    res.send(newArticle);
  } catch (err) {
    if (err.name === CAST_ERROR || err.name === VALIDATION_ERROR) {
      err.statusCode = BAD_REQUEST_ERROR_CODE;
    }
    next(err);
  }
};

const deleteArticle = async (req, res, next) => {
  try {
    const article = await Article.findByIdAndRemove(req.params.articleId);
    if (!article) {
      throw new NotFoundError(INCORRECT_ID_MESSAGE);
    } else {
      res.send(article);
    }
  } catch (err) {
    if (err.name === CAST_ERROR) {
      err.statusCode = BAD_REQUEST_ERROR_CODE;
    }
    next(err);
  }
};

const updateArticle = async (req, res, next) => {
  try {
    const article = await Article.findByIdAndUpdate(req.params.articleId, {
      title: req.body.title,
      text: req.body.text,
    }, { runValidators: true, new: true });
    res.send(article);
  } catch (err) {
    if (err.name === CAST_ERROR || err.name === VALIDATION_ERROR) {
      err.statusCode = BAD_REQUEST_ERROR_CODE;
    }
    next(err);
  }
};

module.exports = {
  getArticles, createArticle, deleteArticle, updateArticle, getArticle,
};
