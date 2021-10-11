const routes = require("express").Router();
const reservationController = require("../controllers/reservationController")

routes.get("/all",reservationController.all);
routes.post("/create",reservationController.create);
routes.post("/update/:id",reservationController.update);

module.exports = routes