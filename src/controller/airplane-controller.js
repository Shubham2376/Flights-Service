const {AirplaneService} = require("../services");
const {StatusCodes} = require('http-status-codes');
const {SuccessResponse,ErrorResponse} = require("../utils/common")
/**
 * if you create an Airplane how the API looks like 
 * the API looks like this 
 * it will be the POST request : /airplanes
 * req-body -> {modelNumber : 'airbus300', capacity : 200}
 */
async function createAirplane(req,res){
    try{
        console.log("Inside Controller")
        const airplane = await AirplaneService.createAirplane({
            modelNumber : req.body.modelNumber,
            capacity : req.body.capacity
        });
        SuccessResponse.data = airplane;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse)
    }
    catch(error){
        ErrorResponse.error = error
        return res
                .status(error.statusCode)
                .json(ErrorResponse)
    }
}
/**
 * if you get all the Airplanes how the API looks like 
 * the API looks like this 
 * it will be the GET request : /airplanes
 * req-body -> {}
 */
async function getAirplanes(req,res){
    try{
    
        const airplanes = await AirplaneService.getAirplanes();
        SuccessResponse.data = airplanes;
        return res
                .status(StatusCodes.OK) // as we not creating anything on server we just fetch data from server so that is why status code was OK 
                .json(SuccessResponse)
        
    }
    catch(error){
        // whatever error object that return by service we attach that and inside the error object we have status code also 
        ErrorResponse.error = error
        return res
                .status(error.statusCode)
                .json(ErrorResponse)
    }
}
/**
 * if you get the Airplane of particular id how the API looks like 
 * the API looks like this 
 * it will be the GET request : /airplanes/:id
 * req-body -> {}
 */
async function getAirplane(req,res){
    try{
        
        const airplanes = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data = airplanes;
        console.log("hi")
        return res
               .status(StatusCodes.OK)
               .json(SuccessResponse)
    }
    catch(error){
        ErrorResponse.error = error
        return res
               .status(error.statusCode)
               .json(ErrorResponse)
    }
}
/**
 * if you delete the Airplane of particular id how the API looks like 
 * the API looks like this 
 * it will be the delete request : /airplanes/:id
 * req-body -> {}
 */
async function destroyAirplane(req,res){
    try{
        
        const airplanes = await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.data = airplanes;
        return res
               .status(StatusCodes.OK)
               .json(SuccessResponse)
    }
    catch(error){
        ErrorResponse.error = error
        return res
               .status(error.statusCode)
               .json(ErrorResponse)
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane
}