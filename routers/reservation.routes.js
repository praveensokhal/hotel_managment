const routes = require("express").Router();
const reservationController = require("../controllers/reservationController")
const Validate = require("../commonFunctions/Validate");
const reservationValidate = require("../validate/reservationValidate")

routes.get("/all",reservationController.all);
routes.post("/create",Validate(reservationValidate.create), reservationController.create);
routes.post("/update/:id",Validate(reservationValidate.update),reservationController.update);

routes.get("/view/:id",reservationController.view);

module.exports = routes