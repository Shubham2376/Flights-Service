const express = require('express');
const {CityController } = require('../../controller');
const router = express.Router();

console.log("Inside Airplane routes")

// It is technically refering to /api/v1/cities on post request
router.post('/',
    CityController.createCity);
    
module.exports = router