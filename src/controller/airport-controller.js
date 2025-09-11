const {StatusCodes} = require('http-status-codes');
const {AirportService} = require("../services");
const {SuccessResponse,ErrorResponse} = require("../utils/common")

/**
 * POST : /airports
 * req-body {name : 'IGI', cityId : 5, code : 'DEL'}
 */
async function createAirport(req,res){
    try{
        console.log("Inside Controller")
        const airport = await AirportService.createAirport({
            name : req.body.name,
            code : req.body.code,
            address : req.body.address,
            cityId : req.body.cityId
        });
        SuccessResponse.data = airport;
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
 * if you get all the Airports how the API looks like 
 * the API looks like this 
 * it will be the GET request : /airports
 * req-body -> {}
 */
async function getAirports(req,res){
    try{
    
        const airports = await AirportService.getAirports();
        SuccessResponse.data = airports;
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
 * if you get the Airport of particular id how the API looks like 
 * the API looks like this 
 * it will be the GET request : /airports/:id
 * req-body -> {}
 */
async function getAirport(req,res){
    try{
        
        const response = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = response;
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
 * if you delete the Airport of particular id how the API looks like 
 * the API looks like this 
 * it will be the delete request : /airports/:id
 * req-body -> {}
 */
async function destroyAirport(req,res){
    try{
        
        const airports = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data = airports;
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
    createAirport,
    getAirports,
    getAirport,
    destroyAirport
}