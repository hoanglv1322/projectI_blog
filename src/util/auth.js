const User =require('../app/model/User');

module.exports.requireAuth =  function authLogin(req, res, next) {
    if(!req.cookies.userId){
        res.redirect('/');
        return;
    }

   var user = User.findOne({id: req.cookies.userId});
   if(!user){
    res.redirect('/');
    return;
   }
   
   next();
   
}

