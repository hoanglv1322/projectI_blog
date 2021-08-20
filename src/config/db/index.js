
// Using Node.js `require()`
const mongoose = require('mongoose');


 async function connect() {

    try{
        await mongoose.connect('mongodb://localhost:127.0.0.1 /f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });

        console.log('Connect Sucessfull!')
    }
    catch(error){
        console.log('Connect failure')
    }
    

}

module.exports = {connect}