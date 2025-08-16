const express = require('express');
const {CityController } = require('../../controller');
const {CityMiddlewares} = require('../../middleware')
const router = express.Router();

console.log("Inside Airplane routes")

// It is technically refering to /api/v1/cities on post request
router.post('/',
    CityMiddlewares.validateCreateRequest,
    CityController.createCity);
    
module.exports = router