// we are going to register the express router
// This is router for v1


const {infoController} = require('../../controller')
const express = require('express');
const router = express.Router();
// router.get('/info',(req,res)=>{
//     res.json({"msg" : "OK"})
// })
router.get('/info',infoController.info); //Here we do registration using Router object and we bind the controller 
module.exports = router; // we can export this router object anywhere