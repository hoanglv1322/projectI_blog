const siteRoute = require('./site');
const courseRoute = require('./Course');
const meRouter = require('./Me');
const authLogin = require('../util/auth');
const gameRouter = require('./game');
const newsRouter = require('./news');

function route(app) {

    app.use('/games', authLogin.requireAuth, gameRouter);
    app.use('/news', authLogin.requireAuth, newsRouter);
    app.use('/me',authLogin.requireAuth, meRouter);
    app.use('/course',authLogin.requireAuth, courseRoute);
    app.use('/', siteRoute);
}

module.exports = route;
