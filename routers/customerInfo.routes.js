const routes = require("express").Router();
const customerInfoController = require("../controllers/customerInfoController")

routes.get("/all",customerInfoController.all);
routes.post("/create",customerInfoController.create);
routes.post("/update/:id",customerInfoController.update);
routes.delete("/delete/:id",customerInfoController.delete)

module.exports = routes