const routes = require("express").Router();
const userInfoController = require("../controllers/userInfoController")

const Validate = require("../commonFunctions/Validate");
const userValidate = require("../validate/userInfoValidate")
routes.get("/all",userInfoController.all);
routes.post("/create",Validate(userValidate.create),userInfoController.create);
routes.get("/reservation-details",userInfoController.reservationDetails)
routes.post("/employee",Validate(userValidate.employeeCreate),userInfoController.employeeCreate);
routes.post("/update/:id",userInfoController.update);
routes.delete("/delete/:id",userInfoController.delete)

module.exports = routes