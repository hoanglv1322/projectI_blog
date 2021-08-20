const { check, validationResult } = require('express-validator');

module.exports = [

    check('fullname').custom(value =>{
        
        if(value.length == 0){
            throw new Error('fullname is required');
        }
        else if(value.length <= 3){
            throw new Error('fullname must length 3 characters');
        }

        return true;
    }),
    
    

    check('email').custom(value =>{
        if(value.length == 0){
            throw new Error('email is required');
        }
        return true;
    })
    .matches(/\d/)
    .normalizeEmail().withMessage('email not exists'),

    check('password').custom((value, {req}) => {
        if(value.length == 0){
            throw new Error('password is required');
        }
        else if(value.length <= 6){
            throw new Error('Password must be at least 6 characters');
        }

        return true;
    }),
    
    
    check('password_confirmation').custom((value, {req}) => {
        if(value.length == 0){
            throw new Error('passwordconfirm is required');
        }
        else if(value !== req.body.password){
            throw new Error('Password confirmation does not match password');
        }

        return true;
    })
    
    

]