const {StatusCodes} = require('http-status-codes');
const {AirplaneRepository} = require("../repositories");
const AppError = require("../utils/errors/app-error");

const airplaneRepository = new AirplaneRepository(); // we make an object airplaneRepository

async function createAirplane(data){
    try{
        console.log("Inside Services")
        // AirplaneRepository its parent have create() function so it automatically have access to create() function so AirplaneRepository class object can access the create() function 
        const airplane = await airplaneRepository.create(data);
        return airplane;
    }
    catch(error){
        // console.log(error.name);
        // console.log(error)
        // if(error.name == 'TypeError'){
        //     throw new AppError('Cannot Create a new Airplane object',StatusCodes.INTERNAL_SERVER_ERROR)
        // }
        // throw error;
        // console.log(error.name)
        //console.log(error);
        if(error.name == 'SequelizeValidationError'){
            
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            console.log(explanation);
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot Create a new Airplane object',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAirplanes(){
    try{
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    }
    catch(error){
        console.log(error)
        throw new AppError('Cannot Fetch data of all airplanes',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
module.exports = {
    createAirplane,
    getAirplanes,
}
