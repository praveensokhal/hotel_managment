
const roomController = require('../controllers/roomControlller')
const Validate = require("../commonFunctions/Validate")
const router = require('express').Router();
const roomClassValidate = require("../validate/roomClassValidate")

router.get('/all',roomController.all)
router.post('/create',Validate(roomClassValidate.create),roomController.create)
router.post('/update/:id',roomController.update,)
router.delete('/delete/:id',roomController.delete)

module.exports = router