const {StatusCodes} = require("http-status-codes");
const {ErrorResponse} = require('../utils/common');
const AppError = require("../utils/errors/app-error");
function validateCreateRequest(req,res,next){
    if(!req.body.name){
            ErrorResponse.message = "something went wrong while creating a Airport"
    // ErrorResponse.error = {explanation : "modelNumber Not Found in incoming request"}
            ErrorResponse.error = new AppError(['Name Not Found in incoming request in the correct from'],StatusCodes.BAD_REQUEST)
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    if(!req.body.code){
            ErrorResponse.message = "something went wrong while creating a Airport"
            ErrorResponse.error = new AppError(['Airport Code Not Found in incoming request in the correct from'],StatusCodes.BAD_REQUEST)
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    if(!req.body.cityId){
            ErrorResponse.message = "something went wrong while creating a Airport"
            ErrorResponse.error = new AppError(['City Id Not Found in incoming request in the correct from'],StatusCodes.BAD_REQUEST)
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    next();
}
module.exports = {
    validateCreateRequest
}