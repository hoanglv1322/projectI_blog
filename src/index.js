const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

const db = require('./config/db');
const route = require('./routers');


//connect db
db.connect();

//use static routes
app.use(express.static(path.join(__dirname, 'public')));

//use cookie to authentic
app.use(cookieParser());

//use mideware to format body in post
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json())


// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

//HTTP logger
// app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    exphbs({
        extname: '.hbs',
        helpers:{
            sum: (a, b) => a+b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));


route(app);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
