
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const InforUser = new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},
    mssv: {type: String, required: true},
    address: {type: String, required: true},
    university: {type: String, required: true},
    academy: {type: String, required: true},
    course: {type: String, required: true},
  });

module.exports =  mongoose.model('InforUser', InforUser);