const mongoose = require("mongoose");

let Schema = mongoose.Schema({
     _id: mongoose.Schema.Types.ObjectId,
    home:  [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Home'
    }],
    email: {type: String, unique: true, required : true, dropDups: true},
    password: {type: String, required: true},
    surname: String,
    name: String,
    age: String,
    gender: String,
});
module.exports = mongoose.model("User", Schema);
