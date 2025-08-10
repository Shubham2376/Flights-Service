const {StatusCodes} = require("http-status-codes");
const {ErrorResponse} = require('../utils/common');
const AppError = require("../utils/errors/app-error");
function validateCreateRequest(req,res,next){
    ErrorResponse.message = "something went wrong while creating a Airplane"
    // ErrorResponse.error = {explanation : "modelNumber Not Found in incoming request"}
    ErrorResponse.error = new AppError(['modelNumber Not Found in incoming request'],StatusCodes.BAD_REQUEST)
    if(!req.body.modelNumber){
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse)
    }
    next();
}
module.exports = {
    validateCreateRequest
}