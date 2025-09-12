const {StatusCodes} = require('http-status-codes');
const {FlightRepository} = require("../repositories");
const {Op} = require('sequelize');
const AppError = require("../utils/errors/app-error");


const flightRepository = new FlightRepository(); // we make an object flightRepository

async function createFlight(data){
    try{
        console.log("Inside Services")
        const flight = await flightRepository.create(data);
        return flight;
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
        throw new AppError('Cannot Create a new Flight object',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAllFlights(query){
    let customFilter = {};
    // Now we make our own custom filter
    // 1st filter- trips : MUM-DEL
    if(query.trips){
        
        [departureAirportId,arrivalAirportId] = query.trips.split("-");
        customFilter.departureAirportId = departureAirportId;
        customFilter.arrivalAirportId =arrivalAirportId;
        //console.log(customFilter)
    }
    if(query.price){
        [minPrice,maxPrice] = query.price.split("-");
        customFilter.price = {
            [Op.between] : [minPrice,((maxPrice == undefined) ? 20000 : maxPrice)]
        }
    }
    if(query.travellers){
        customFilter.totalSeats = {
            [Op.gte] : query.travellers
        }
    }
    
    try{
        const flights = await flightRepository.getAllFlights(customFilter);
        return flights;
    }
    catch(error){
        throw new AppError('Cannot Fetch data of all flights',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
module.exports = {
    createFlight,
    getAllFlights
}
