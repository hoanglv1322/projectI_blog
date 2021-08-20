
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
    textStatus: {type: 'string', require: true},
    
    img: {
        filename : {
            type : String,
            required: true
        },
        contentType : {
            type: String,
            required : true
        },
        imgbase64 : {
            type : String,
            required: true
        }
    },
  });

module.exports =  mongoose.model('Post', Post);