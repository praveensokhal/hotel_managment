const express = require('express')
const router = express.Router();
const roomsClass = require('./roomsClass.routes')
const roomInfo = require('./roomsInfo.routes')
const userInfo = require("./userInfo.routes");
const reservationInfo = require("./reservation.routes");
const paymentInfo = require("./payment.routes")
router.use('/room', roomsClass);
router.use('/room-info',roomInfo);
router.use("/user",userInfo);
router.use("/reservation",reservationInfo);
router.use("/payment",paymentInfo)
module.exports = router;