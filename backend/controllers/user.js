const mongoose = require("mongoose");

const User = require("../model/User");
const Home = require("../model/Home");

const home = require("../home");
const token = require("../controllers/token");
const mes = require("./responseOnFront");



module.exports.reg = function (request, response) {
    console.log(request.url);
    console.log(request.body);
    
    // let user = request.body;

    let user = {
        email: request.body.email || null,
        password: request.body.password || null,
        surname: request.body.surname || null,
        name: request.body.name || null,
        age: request.body.age || null,
        gender: request.body.gender || null,
    }

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
                    response.send(mes(false, "Такой пользователь уже есть"));
                    return
                }
                
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

module.exports.postEditHome = (request, response) => {
    console.log(request.url);
    // console.log(request.body)

    const arr = request.body.arrHome

    arr.forEach( (item, index) => {
        Home.findById({_id: item._id}, (err, i) => {           

            i.name = item.name;
            i.save();
        })
    });


    home.findHomeByIdUser(request.body.id, (arr) => {
        response.send({success: true, message:"arr Home", arr: arr})
    })
    
}

module.exports.getEditHome = (request, response) => {
    console.log(request.url);
    console.log(request.params.id);

    home.findHomeByIdUser(request.params.id, (arr) => {
        console.log("getEditHome",arr)
        response.send({success: true, message:"arr Home", arr: arr})
    })
    
    
}

