const {StatusCodes} = require("http-status-codes");
const {ErrorResponse} = require('../utils/common');
const AppError = require("../utils/errors/app-error");
function validateCreateRequest(req,res,next){
    
    if(!req.body){
        ErrorResponse.message = "something went wrong while creating a City"
    // ErrorResponse.error = {explanation : "modelNumber Not Found in incoming request"}
        ErrorResponse.error = new AppError(['city name is  Not Found in incoming request in correct form'],StatusCodes.BAD_REQUEST)
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    next();
}
module.exports = {
    validateCreateRequest
}