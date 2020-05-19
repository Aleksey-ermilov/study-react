const mongoose = require("mongoose");


const User = require("./model/User");
const Home = require("./model/Home");
const Room = require("./model/Room");



const bcrypt = require("bcrypt");

module.exports.getUserByEmail = function (email, callback) {
    const query = {email: email};
    User.findOne(query, callback);
};

module.exports.getUserById = function (id, callback) {
    User.findOne(id, callback);
};

module.exports.addUser = function (newUser, callback) {

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            newUser.password = hash;
            newUser.save(callback)
        })
    })

    //newUser
};





