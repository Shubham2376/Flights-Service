// we are going to register the express router
// This is router for v1

const express = require('express');
const {infoController} = require('../../controller')
const airplaneroutes = require('./airplane-routes');
const cityroutes = require('./city-routes')
const airportroutes = require('./airport-routes');

const router = express.Router();
// router.get('/info',(req,res)=>{
//     res.json({"msg" : "OK"})
// })

console.log("Inside v1 routes")

router.get('/info',infoController.info); //Here we do registration using Router object and we bind the controller 
router.use('/airplanes',airplaneroutes); // if anyone give you routes which start with /airplanes you mount your airplaneroutes here
router.use('/cities',cityroutes);
router.use('/airports',airportroutes);
module.exports = router; // we can export this router object anywhere