module.exports = class Response {

    status;
    message;

    #error_statuses = [];
    #good_statuses = [];

    constructor (status, message, data) {

    }

}