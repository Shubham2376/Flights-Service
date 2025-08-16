const {StatusCodes} = require('http-status-codes');
const {CityRepository} = require("../repositories");
const AppError = require("../utils/errors/app-error");

const cityRepository = new CityRepository(); // we make an CityRepository

async function createCity(data){
     try{
        console.log("Inside Services") 
        const city = await cityRepository.create(data);
        return city;
    }
    catch(error){
        //console.log(error)
        if(error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError'){
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            //console.log(explanation);
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        // If anything else happen e.g you can’t able to connect with database, etc then the internal server then this line is for that 
        throw new AppError('Cannot Create a new city object',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
module.exports = {
    createCity
}