const express = require('express');
const { FlightController } = require('../../controller');
const {FlightMiddlewares } = require('../../middleware');
const router = express.Router();

console.log("Inside Flight routes")

// It is technically refering to /api/v1/flights on post request
router.post('/',
    FlightMiddlewares.validateCreateRequest,
    FlightController.createFlight);

// /api/v1/flights?trips=MUM-DEL on GET request
router.get('/',FlightController.getAllFlights);

// /api/v1/flights/:id GET request
router.get('/:id',FlightController.getFlight);

// /api/v1/flights/:id/seats PATCH request
router.patch('/:id/seats',FlightMiddlewares.validateSeatsUpdateRequest,
    FlightController.updateSeats
)
    
module.exports = router