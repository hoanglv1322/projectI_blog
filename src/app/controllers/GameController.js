
const Game =require('../model/Game');
const {mongooseToObject} = require('../../util/mongoose');
const {muntipleMongooseToObject} = require('../../util/mongoose');


class Controller{


    create(req, res, next){
        res.render('game/createGame');
    }

    stored(req, res, next){
       const game = new Game(req.body);
       game.save()
       .then(() => res.redirect('/games/sport'));
    }

    showDetails(req, res, next){
        Game.find({type: req.params.type})
        .then(games => res.render('game/games', {
            games: muntipleMongooseToObject(games)
        }))
        .catch(next);
    }

    

}

module.exports = new Controller();