var router = require('express').Router()
var roomInfoController = require("../controllers/roomInfoController")
router.get("/all",roomInfoController.all)
router.post("/create",roomInfoController.create)
router.post("/update/:id",roomInfoController.update)

module.exports = router;