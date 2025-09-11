const express = require('express');
const { AirportController } = require('../../controller');
const {AirportMiddlewares } = require('../../middleware');
const router = express.Router();

console.log("Inside Airport routes")

// It is technically refering to /api/v1/airplanes on post request
router.post('/',
    AirportMiddlewares.validateCreateRequest,
    AirportController.createAirport);

// It is technically refering to /api/v1/airplanes/ on get request
router.get('/',
    AirportController.getAirports);

// It is technically refering to /api/v1/airplanes/:id on get request
router.get('/:id',
    AirportController.getAirports);

// It is technically refering to /api/v1/airplanes/:id on delete request
router.delete('/:id',
    AirportController.destroyAirport);
    
module.exports = router