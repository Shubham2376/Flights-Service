const {StatusCodes} = require("http-status-codes");
const {ErrorResponse} = require('../utils/common');
const AppError = require("../utils/errors/app-error");
function validateCreateRequest(req,res,next){
    if(!req.body.flightNumber){
            ErrorResponse.message = "something went wrong while creating a flight"
    // ErrorResponse.error = {explanation : "modelNumber Not Found in incoming request"}
            ErrorResponse.error = new AppError(['flightNumber Not Found in incoming request in the correct from'],StatusCodes.BAD_REQUEST)
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    if(!req.body.airplaneId){
            ErrorResponse.message = "something went wrong while creating a flight"
            ErrorResponse.error = new AppError(['airplaneId Not Found in incoming request in the correct from'],StatusCodes.BAD_REQUEST)
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    if(!req.body.departureAirportId){
            ErrorResponse.message = "something went wrong while creating a flight"
            ErrorResponse.error = new AppError(['departureAirportId Not Found in incoming request in the correct from'],StatusCodes.BAD_REQUEST)
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    if(!req.body.arrivalAirportId){
            ErrorResponse.message = "something went wrong while creating a flight"
            ErrorResponse.error = new AppError(['arrivalAirportId Not Found in incoming request in the correct from'],StatusCodes.BAD_REQUEST)
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    if(!req.body.arrivalTime){
            ErrorResponse.message = "something went wrong while creating a flight"
            ErrorResponse.error = new AppError(['arrivalTime Not Found in incoming request in the correct from'],StatusCodes.BAD_REQUEST)
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    if(!req.body.departureTime){
            ErrorResponse.message = "something went wrong while creating a flight"
            ErrorResponse.error = new AppError(['departureTime Not Found in incoming request in the correct from'],StatusCodes.BAD_REQUEST)
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    if(!req.body.price){
            ErrorResponse.message = "something went wrong while creating a flight"
            ErrorResponse.error = new AppError(['price Not Found in incoming request in the correct from'],StatusCodes.BAD_REQUEST)
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    if(!req.body.boardingGate){
            ErrorResponse.message = "something went wrong while creating a flight"
            ErrorResponse.error = new AppError(['boardingGate Not Found in incoming request in the correct from'],StatusCodes.BAD_REQUEST)
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    if(!req.body.totalSeats){
            ErrorResponse.message = "something went wrong while creating a flight"
            ErrorResponse.error = new AppError(['totalSeats Not Found in incoming request in the correct from'],StatusCodes.BAD_REQUEST)
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    
    next();
}
function validateSeatsUpdateRequest(req,res,next){
    if(!req.body.seats){
            ErrorResponse.message = "something went wrong while creating a flight"
            ErrorResponse.error = new AppError(['Seats Not Found in incoming request in the correct from'],StatusCodes.BAD_REQUEST)
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    next();
}
module.exports = {
    validateCreateRequest,
    validateSeatsUpdateRequest
}