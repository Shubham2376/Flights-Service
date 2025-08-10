const express = require('express');
const { AirplaneController } = require('../../controller');
const {AirplaneMiddlewares } = require('../../middleware');
const router = express.Router();

console.log("Inside Airplane routes")

// It is technically refering to /api/v1/airplanes which is post request
router.post('/',
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane);
module.exports = router