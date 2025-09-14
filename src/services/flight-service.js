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
    let endingTripDate = " 23:59:00";
    let customFilter = {};
    let sortFilter = [];
    // Now we make our own custom filter
    // 1st filter- trips : MUM-DEL
    if(query.trips){
        
        [departureAirportId,arrivalAirportId] = query.trips.split("-"); //destructing we do here 
        customFilter.departureAirportId = departureAirportId;
        customFilter.arrivalAirportId =arrivalAirportId;
        //console.log(customFilter)
    }
    if(query.price){
        [minPrice,maxPrice] = query.price.split("-");
        // we use sequelize operator for mentionining that flight should be in this range 
        customFilter.price = {
            [Op.between] : [minPrice,((maxPrice == undefined) ? 20000 : maxPrice)]
        }
    }
    if(query.travellers){
        customFilter.totalSeats = {
            [Op.gte] : query.travellers
        }
    }
    if(query.tripDate){
        customFilter.departureTime = {
            [Op.between] : [query.tripDate,query.tripDate + endingTripDate]
        }
    }
    if(query.sort){
        const params = query.sort.split(','); //It returns the array of params 
        const sortFilters = params.map((param)=>param.split('_')); //we further split each params based on _
        // const sortFilter = [] -> this we declare above
        sortFilter = sortFilters;
    }
    try{
        const flights = await flightRepository.getAllFlights(customFilter,sortFilter);
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
