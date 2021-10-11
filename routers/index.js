const express = require('express')
const router = express.Router();
const roomsClass = require('./roomsClass.routes')
const roomInfo = require('./roomsInfo.routes')
const customerInfo = require("./customerInfo.routes");
const reservationInfo = require("./reservation.routes");
const paymentInfo = require("./payment.routes")
router.use('/room', roomsClass);
router.use('/room-info',roomInfo);
router.use("/customer",customerInfo);
router.use("/reservation",reservationInfo);
router.use("/payment",paymentInfo)
module.exports = router;