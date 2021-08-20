
const Course =require('../model/Course');
const {mongooseToObject} = require('../../util/mongoose');
const {muntipleMongooseToObject} = require('../../util/mongoose');
const {courseDetail} = require('../../util/mongoose');

class Controller{

    //show detail course
    show(req, res, next){

        Course.find({type: req.params.type})
        .then(courses => {
            res.render('user/coursedetail', {
                courses: courseDetail(courses, req.params.slug)
            })
        })
        .catch(next);
    
     }

    
    create(req, res){
         res.render('user/create');
     }

    store(req, res, next){
         const formData = req.body;
         formData.imga = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
         const course = new Course(formData);
         course.save()
         .then(() => res.redirect('/me/listcourse/js'));

    
     }
}

module.exports = new Controller;