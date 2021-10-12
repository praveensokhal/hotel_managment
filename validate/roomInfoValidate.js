const Joi = require("joi")
const {objectId} = require("./customValidation")

const create = Joi.object().keys({
    roomType:Joi.custom(objectId).required(),
    roomSample:Joi.string().alphanum().required(),
    description:Joi.string().required()
})

module.exports = create;