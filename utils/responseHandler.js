const Constants = require('./constant');

module.exports = {

responder : (request, response, status, data, token) => {
    response.status(200).json({
        status: status,
        message: Constants[status],
        data: data,
        token: token
    });
},

erroResponder : (request, response, status) => {
    response.status(400).json({
        status: status,
        message: Constants[status],
    });
}

}