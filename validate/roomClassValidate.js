const Joi = require('joi');
const { objectId } = require('./customValidation');
const create = Joi.object().keys({
    room: Joi.string().alphanum().min(2).max(11).required(),
    price:Joi.number().required(),
});

module.exports = create