const mongoose = require('mongoose');
const { REQUIRED_MESSAGE } = require('../utils/utils');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, REQUIRED_MESSAGE('title')],
  },
  text: {
    type: String,
    required: [true, REQUIRED_MESSAGE('text')],
  },
});

module.exports = mongoose.model('article', articleSchema);
