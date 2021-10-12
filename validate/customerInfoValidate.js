const Joi = require("joi")
const {objectId} = require("./customValidation")

const create = Joi.object().keys({
    firstName:Joi.custom(objectId).required(),
    lastName:Joi.string().alphanum().required(),
    contactNo:Joi.string().required(),
    email:Joi.string().required().email(),
    address:Joi.string().alphanum().required(),
    adhaarNo:Joi.number().required()
})

module.exports = create;