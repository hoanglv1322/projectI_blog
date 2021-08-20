const Course = require("../model/Course");
const InforUser = require("../model/InforUser");
const { muntipleMongooseToObject } = require("../../util/mongoose");
const { mongooseToObject } = require("../../util/mongoose");
const Post = require("../model/Post");
const fs = require("fs");

class Controller {
  show(req, res, next) {
    Course.find({})
      .then((course) =>
        res.render("user/myCourse", {
          course: muntipleMongooseToObject(course),
        })
      )
      .catch(next);
  }

  //show list course
  homeshow(req, res, next) {
    Course.find({ type: req.params.type })
      .then((course) => {
        res.render("user/listCourse", {
          course: muntipleMongooseToObject(course),
        });
      })
      .catch(next);
  }

  edit(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render("user/myCourseEdit", {
          course: mongooseToObject(course),
        })
      )
      .catch(next);
  }

  updateInfor(req, res, next) {
    InforUser.updateOne({ mssv: req.params.mssv }, req.body)
      .then(() => res.redirect("/me/profile"))
      .catch(next);
  }

  update(req, res, next) {
    Course.updateOne({ slug: req.params.slug }, req.body)
      .then(() => res.redirect("/me/stored/course"))
      .catch(next);
  }

  delete(req, res, next) {
    Course.deleteOne({ slug: req.params.slug })
      .then(() => res.redirect("/me/stored/course"))
      .catch(next);
  }

  showProfile(req, res, next) {
    InforUser.find({})
      .then((inforuser) => {
        if (!inforuser) {
          res.render("user/profile");
        } else {
          res.render("user/profile", {
            inforuser: muntipleMongooseToObject(inforuser),
          });
        }
      })
      .catch(next);
  }

  saveProfile(req, res, next) {
    const data = req.body;
    const inforuser = new InforUser(data);
    inforuser.save().then(() => res.redirect("/me/listcourse"));
  }

  music(req, res, next) {
    res.render("user/music");
  }

  mypost(req, res, next) {
    Post.find({})
      .then((posts) => 
        res.render('user/mypost', { 
            posts: muntipleMongooseToObject(posts)
        }))
      .catch(next);
  }

  post(req, res, next) {
    const file = req.file; 
    const img = fs.readFileSync(file.path);
    const encode_image = img.toString("base64");
    // Define a JSONobject for the image attributes for saving to database

    const finalImg = {
        filename: file.originalname,
        contentType: file.mimetype,
        imgbase64: encode_image,
    };

    const post = new Post({
        textStatus: req.body.textStatus, 
        img: finalImg
    });

    post.save()
    .then(() => res.redirect("/me/stored/post"));  
    
  }

  deletePost(req, res, next) {
    Post.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("/me/stored/post"))
      .catch(next);
  }


}

module.exports = new Controller();
