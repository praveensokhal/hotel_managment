const routes = require("express").Router();
const paymentInfoController = require("../controllers/paymentController")

routes.get("/all",paymentInfoController.all);
routes.post("/create",paymentInfoController.create);
routes.post("/update/:id",paymentInfoController.update);
routes.delete("/delete/:id",paymentInfoController.delete)

module.exports = routes