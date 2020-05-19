const jwt = require('jsonwebtoken');
const config = require("../config/config");

module.exports = function (user){
    return jwt.sign(JSON.stringify(user), config.secretKey);
};
