
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const New = new Schema({
    img: {type: 'string', require: true},
    title: {type: 'string', require: true},
    description: {type: 'string', require: true},
    type: {type: 'string', require: true},
  });

module.exports =  mongoose.model('New', New);