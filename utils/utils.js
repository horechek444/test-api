const BAD_REQUEST_ERROR_CODE = 400;
const SERVER_ERROR_MESSAGE = 'На сервере произошла ошибка';
const INVALID_ID = 'Невалидный id';
const CAST_ERROR = 'CastError';
const VALIDATION_ERROR = 'ValidationError';
const INCORRECT_ID_MESSAGE = 'Нет статьи с таким id';
const REQUIRED_MESSAGE = (value) => `Поле ${value} должно быть заполнено`;
const EMPTY_FIELD_MESSAGE = (value) => `Поле ${value} не должно быть пустым`;

module.exports = {
  BAD_REQUEST_ERROR_CODE,
  SERVER_ERROR_MESSAGE,
  INVALID_ID,
  CAST_ERROR,
  VALIDATION_ERROR,
  INCORRECT_ID_MESSAGE,
  REQUIRED_MESSAGE,
  EMPTY_FIELD_MESSAGE,
};
