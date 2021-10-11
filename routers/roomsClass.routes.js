
const roomController = require('../controllers/roomControlller')
const router = require('express').Router();

router.get('/all',roomController.all)
router.post('/create',roomController.create)
router.post('/update/:id',roomController.update)
router.delete('/delete/:id',roomController.delete)
module.exports = router