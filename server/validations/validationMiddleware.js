const _ = require('lodash');
const constants = require('../common/constants')
const requiredFields = ['name', 'owner_id', 'org_id', 'email', 'phone']
exports.validatePersonBody = async (req, res, next) => {
    let errors = {status:400, errors:[]};
    if (_.isUndefined(req.body) || _.isEmpty(req.body)) {
        let err = { 
            status: 400, 
            message: `Request Body for ${req.method} ${req.url} is Empty.`,
            errorCode: constants.invalidRequest
        };
        errors.errors.push(err);
        return next(errors);
    }
    for(let required of requiredFields){
        if(_.isUndefined(req.body[required])){
            let body = req.body[required];
            console.log(_.isEmpty(body))
            let err = { 
                status: 400, 
                message: `Request Body for ${req.method} ${req.url} is missing required field ${required}.`,
                errorCode: constants.invalidRequest
            };
            errors.errors.push(err);
        }
    }
    errors.errors.length > 0 ? next(errors) : next();
    return


}
