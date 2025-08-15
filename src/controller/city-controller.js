const {StatusCodes} = require('http-status-codes');
const {CityService} = require("../services");
const {SuccessResponse,ErrorResponse} = require("../utils/common")
/**
 * if you create an cities how the API looks like 
 * the API looks like this 
 * it will be the POST request : /cities
 * req-body -> {name : 'London'}
 */
async function createCity(req,res){
    try{
        console.log("Inside Controller")
        const city = await CityService.createCity({
            name : req.body.name
        });
        SuccessResponse.data = city;
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
    createCity
}