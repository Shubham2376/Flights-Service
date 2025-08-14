const express = require('express');
const { AirplaneController } = require('../../controller');
const {AirplaneMiddlewares } = require('../../middleware');
const router = express.Router();

console.log("Inside Airplane routes")

// It is technically refering to /api/v1/airplanes on post request
router.post('/',
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane);

// It is technically refering to /api/v1/airplanes/ on get request
router.get('/',
    AirplaneController.getAirplanes);

// It is technically refering to /api/v1/airplanes/:id on get request
router.get('/:id',
    AirplaneController.getAirplane);

// It is technically refering to /api/v1/airplanes/:id on delete request
router.delete('/:id',
    AirplaneController.destroyAirplane);
    
module.exports = router