const mongoose = require("mongoose");

const home = require("../home");
const User = require("../model/User");
const token = require("../controllers/token");
const mes = require("./responseOnFront");



module.exports.reg = function (request, response) {
    console.log(request.url);
    let user = request.body;

    let newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        email: user.email,
        password: user.password,
        surname: user.surname,
        name: user.name,
        age: user.age,
        gender: user.gender,
        home: []
    });
    home.createHome(newUser);


    User.findOne({email: newUser.email}, function(user) {
        if (user === null){

            newUser.save(function (err, user) {
                if (err) {
                    response.send(mes(false, err));
                }
                home.findHomeByIdUser(user._id)
                response.send(mes(true, 'Пользователь зарегестрирован', user));
            });
        }else {
            response.send(mes(false, "Такой пользователь уже есть"));
        }
        console.log(user);
    });
};


module.exports.auth = function (request, response) {
    console.log(request.url);
    console.log(request.body);

    let email = request.body.email;
    let password = request.body.password;

    User.findOne({email: email}, (err, user) => {
        if (err) {
            response.send(mes(false, err));
        }

        if (user === null){
            response.send(mes(false,'Такого пользователя нет'));
        }else {
            if (user.password === password){
                response.send(mes(true, 'Пользователь найден!!!', user, token(user)))

            }else {
                response.send(mes(false,'Пароль не верен'))
            }
        }
    })
};

module.exports.editUser = (request, response) => {
    console.log(request.url);
    console.log(request.body)

    let user = request.body;

    console.log("user",user)

    //let updatedUser = User.findOneAndUpdate({_id: user._id},user, {new: true})
    //
    // response.send(mes(true,'пользователь обновлён', updatedUser));

    User.findOne({_id: user._id}, (err, u) => {

        u.email = user.email;
        u.password = user.password;
        u.surname = user.surname;
        u.name = user.name;
        u.age = user.age;
        u.gender = user.gender;

        u.save((err, user) => {
            if (err) {
                response.send(mes(false, err));
                throw err;
            }
            response.send(mes(true,'пользователь обновлён', user));
        });
    });
};


