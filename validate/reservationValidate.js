const Joi = require("joi")
const {objectId} = require("./customValidation")

const create = Joi.object().keys({
    customerId:Joi.custom(objectId).required(),
    roomId:Joi.custom(objectId).required(),
    checkIn:Joi.date().required(),
})

const update = Joi.object().keys({
    checkOut:Joi.date().required(),
    noOfDays:Joi.number().required()
})
module.exports = {
                    create,
                    update
                };