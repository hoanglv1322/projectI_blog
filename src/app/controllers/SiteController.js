
const User =require('../model/User');
const {muntipleMongooseToObject} = require('../../util/mongoose');
const { validationResult } = require('express-validator');




class Controller{



    show(req, res, next) {
        res.render('home');
    }


    signUpshow(req, res, next) {
        res.render('signUp');
    }

    signUp(req, res, next) {
        const errors = validationResult(req);
        const user = req.body;
        if(!errors.isEmpty()){
            res.render('signUp', {errors: errors.array(), user});
        }
        else{
            const newUser = new User(user);
            newUser.save()
            .then(() => res.redirect('/me/listcourse'));
        }
    }

    signIn(req, res, next){
        const data = req.body;
        User.findOne({email: data.email})
        .then(user => {   
            if(user == null ){
                 res.render('home', {errors: 'password or email not true'});
                 return;
            }

            if(user.password !== data.password){
                res.render('home', {errors: 'password or email not true'});
            }
            else{ 
                res.cookie('userId', user.id);
                res.redirect('/me/listcourse/js');
            }    
        })
        .catch(next);
    }

    signOut(req, res, next){
        res.cookie('userId', "");
        res.redirect('/home');
    }

    showHomePage(req, res, next){
        res.render('homepage');
    }
}

module.exports = new Controller;