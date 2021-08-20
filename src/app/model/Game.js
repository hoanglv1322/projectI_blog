
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Game = new Schema({
    img: {type: 'string', require: true},
    name: {type: 'string', require: true},
    people: {type: 'string', require: true},
    type: {type: 'string', require: true},
  });

module.exports =  mongoose.model('Game', Game);