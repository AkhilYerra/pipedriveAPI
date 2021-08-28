const _ = require('lodash')
const constants = require('../common/constants')
exports.transformErrors = (errorBody) =>{
    //In the case the errorBody is not in the expected format send back the error from pipedrive itself to app.js
    //This in turn will cause app.js to throw a 500 error(generic error/server error)
    if(_.isUndefined(errorBody)){
        return errorBody;
    }
    if(_.isUndefined(errorBody.errorCode)){
        return errorBody;
    }

    //Follow the same format as the validation errors with a status field and a errors array within the object
    let errorsObject = {status:errorBody.errorCode, errors:[]};
    let customError = {status:errorBody.errorCode, message:errorBody.errorResponse, errorCode:constants.invalidRequest}
    errorsObject.errors.push(customError);
    return errorsObject;
} 