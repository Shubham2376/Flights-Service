const {StatusCodes} = require('http-status-codes');
// whatever details we rquired for information related overall api we might send it from info-controller 
const info = (req,res) =>{
    // whenever we have api responses we generally follow some api response structure 
    // now statuscodes bind inside the enum 
    return res.status(StatusCodes.OK).json({
        success : true,
        msg : "API is live",
        error : {},
        data : {}
    })
}
module.exports = {
    info
}