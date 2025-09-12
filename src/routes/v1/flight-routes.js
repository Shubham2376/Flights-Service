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
    
module.exports = router