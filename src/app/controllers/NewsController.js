const News =require('../model/News');
const {mongooseToObject} = require('../../util/mongoose');
const {muntipleMongooseToObject} = require('../../util/mongoose');

class Controller{



    create(req, res, next){
        res.render('news/createNews');
    }

    stored(req, res, next){
        const news = new News(req.body);
        news.save()
        .then(() => res.redirect('/news/sport'));
     }

    showDetails(req, res, next){
        News.find({type: req.params.type})
        .then(news => res.render('news/news', {
            news: muntipleMongooseToObject(news)
        }))
        .catch(next);
    }
}

module.exports = new Controller();