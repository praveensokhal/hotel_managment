const Joi = require("joi")
const {objectId} = require("./customValidation")
const defaultValue = 1;
const create = Joi.object().keys({
    firstName:Joi.string().required(),
    lastName:Joi.string().alphanum().required(),
    contactNo:Joi.string().required(),
    email:Joi.string().required().email(),
    address:Joi.string().alphanum().required(),
    adhaarNo:Joi.number().required(),
    roleType:Joi.number().default(defaultValue)
})

const employeeCreate = Joi.object().keys({
    firstName:Joi.string().required(),
    lastName:Joi.string().alphanum().required(),
    contactNo:Joi.string().required(),
    email:Joi.string().required().email(),
    address:Joi.string().alphanum().required(),
    adhaarNo:Joi.number().required(),
    roleType:Joi.number()
})
module.exports = {
                employeeCreate,
                create
            };