configFile = require(`../../config/config-${process.env.NODE_ENV}.json`);

console.log(configFile);
exports.module = {
    API_TOKEN : process.env.API_TOKEN
}