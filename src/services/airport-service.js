const {StatusCodes} = require('http-status-codes');
const {AirportRepository} = require("../repositories");
const AppError = require("../utils/errors/app-error");

const airportRepository = new AirportRepository(); // we make an object airplaneRepository

async function createAirport(data){
    try{
        console.log("Inside Services")
        const airport = await airportRepository.create(data);
        return airport;
    }
    catch(error){
        if(error.name == 'SequelizeValidationError'){
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            console.log(explanation);
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
         // If anything else happen e.g you can’t able to connect with database, etc then the internal server then this line is for that 
        throw new AppError('Cannot Create a new Airport object',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAirports(){
    try{
        const airports = await airportRepository.getAll();
        return airports;
    }
    catch(error){
        throw new AppError('Cannot Fetch data of all airports',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAirport(id){
    try{
        const airport = await airportRepository.get(id);
        return airport;
    }
    catch(error){
        // error have statusCode property because we coming from the AppError file
        if(error.statusCode == StatusCodes.NOT_FOUND ){
            throw new AppError('The airport you requested was not present',error.statusCode)
        }
        // other than above error if came like sequelize was not able to connect i don't show that to send user i just say internal server error
        throw new AppError('Cannot Fetch data of all airplanes',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function destroyAirport(id){
    try{
        const airplane = await airportRepository.destroy(id);
        return airplane;
    }
    catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND ){
            throw new AppError('The airport you requested to delete is not present',error.statusCode)
        }
        
        throw new AppError('Cannot destroy airports',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport
}
