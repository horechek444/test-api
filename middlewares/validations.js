const { celebrate, Joi } = require('celebrate');
const { ObjectId } = require('mongoose').Types;
const {
  REQUIRED_MESSAGE,
  EMPTY_FIELD_MESSAGE,
  INVALID_ID,
} = require('../utils/utils');

const validateObjId = celebrate({
  params: Joi.object().keys({
    articleId: Joi.string().required().hex().length(24)
      .custom((value, helpers) => {
        if (ObjectId.isValid(value)) {
          return value;
        }
        return helpers.message(INVALID_ID);
      }),
  }),
});

const validateArticleBody = celebrate({
  body: Joi.object().keys({
    title: Joi.string().required()
      .messages({
        'any.required': REQUIRED_MESSAGE('title'),
        'string.empty': EMPTY_FIELD_MESSAGE('title'),
      }),
    text: Joi.string().required()
      .messages({
        'any.required': REQUIRED_MESSAGE('text'),
        'string.empty': EMPTY_FIELD_MESSAGE('text'),
      }),
  }),
});

module.exports = {
  validateObjId,
  validateArticleBody,
};
