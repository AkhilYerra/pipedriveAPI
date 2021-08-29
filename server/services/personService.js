const pipedrive = require('pipedrive');
const config = require('../common/config')


exports.createPersonService = async (personBody) => {
    //pipedrive supports apiToken and Oauth2 but my account was provided an API token so took this approach
    pipedrive.Configuration.apiToken = config.module.API_TOKEN;
    const person = await pipedrive.PersonsController.addAPerson(personBody)
        .catch(
            err => {

                throw err
            }
        );
    return person;
}

exports.updatePersonService = async (updatedPersonBody) => {
    //pipedrive supports apiToken and Oauth2 but my account was provided an API token so took this approach
    pipedrive.Configuration.apiToken = config.module.API_TOKEN;
    const person = await pipedrive.PersonsController.updateAPerson(updatedPersonBody)
        .catch(
            err => {

                throw err
            }
        );
    return person;
}

//Could add more services to connect to the DB and keep a log/track of any requests
