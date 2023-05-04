var endpoint_var = 'TRANSLATOR_TEXT_ENDPOINT'
var key_var = 'TRANSLATOR_TEXT_RESOURCE_KEY';
var region_var = 'TRANSLATOR_TEXT_REGION';

var region = process.env[region_var];
var endpoint = process.env[endpoint_var];
var resourceKey = process.env[key_var];


/**
 * Checking if the variables are set
 */
var key_var = 'TRANSLATOR_TEXT_RESOURCE_KEY';
console.log(process.env['PORT'])
if (!process.env[key_var]) {
    throw new Error('Please set/export the following environment variable: ' + key_var);
}
var resourceKey = process.env[key_var];

var region_var = 'TRANSLATOR_TEXT_REGION';
if (!process.env[region_var]) {
    throw new Error('Please set/export the following environment variable: ' + region_var);
}
var region = process.env[region_var];

var endpoint_var = 'TRANSLATOR_TEXT_ENDPOINT';
if (!process.env[endpoint_var]) {
    throw new Error('Please set/export the following environment variable: ' + endpoint_var);
}
var endpoint = process.env[endpoint_var];


/**
 * Exporting the variables
 * */
module.exports = {
    region,
    endpoint,
    resourceKey
};