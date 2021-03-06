
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const User = new Schema({
    fullname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    password_confirmation: {type: String, required: true},
  });

module.exports =  mongoose.model('User', User);