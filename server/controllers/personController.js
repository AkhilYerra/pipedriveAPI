config = require('../common/config')
const personService = require('../services/personService')
const errorHandling = require('../helpers/errorHandling')

exports.createPerson = async (req, res, next) => {

    //Pipedrive requires you to encompass the request body in a json object with field called body
    //Decided to do that in the controller itself instead of requesting the user to send a nested json object when not neccessary
    input = {}
    input['body'] = req.body

    const person = await personService.createPersonService(input)
        .catch(
            err => {
                //Error Handling mechanism to transform into array of errors for app.js to handle
                let errors = errorHandling.transformErrors(err);
                next(errors)
                return errors;
            }
        );
    //Send back default response that we get from pipedrive with 200 status if not an error
    res.status(200).send(person);
    return person;
}

exports.updatePerson = async (req, res, next) => {
    let input = req.body;
    input.id = req.params.id;
    const person = await personService.createPersonService(input)
        .catch(
            err => {
                //Error Handling mechanism to transform into array of errors for app.js to handle
                let errors = errorHandling.transformErrors(err);
                next(errors)
                return errors;
            }
        );
    //Send back default response that we get from pipedrive with 200 status if not an error
    res.status(200).send(person);
    return person;
}
