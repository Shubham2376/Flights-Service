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
module.exports = {
    createAirplane
}