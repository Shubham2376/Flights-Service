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
        throw new AppError('Cannot Fetch data of all airplanes',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAirplane(id){
    try{
        const airplane = await airplaneRepository.get(id);
        return airplane;
    }
    catch(error){
        // error have statusCode property because we coming from the AppError file
        if(error.statusCode == StatusCodes.NOT_FOUND ){
            throw new AppError('The airplane you requested was not present',error.statusCode)
        }
        // other than above error if came like sequelize was not able to connect i don't show that to send user i just say internal server error
        throw new AppError('Cannot Fetch data of all airplanes',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function destroyAirplane(id){
    try{
        const airplane = await airplaneRepository.destroy(id);
        return airplane;
    }
    catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND ){
            throw new AppError('The airplane you requested to delete is not present',error.statusCode)
        }
        throw new AppError('Cannot Fetch data of all airplanes',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane
}
