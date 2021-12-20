var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv').config();
var session = require('express-session');
const {verifyAdmin, verifyUser, verifyLogin} = require('./middlewares/auth');


var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');
const registroRouter = require('./routes/registro');
const loginRouter = require('./routes/login');
const cursosRouter = require('./routes/cursos');
const perfilAdminRouter = require('./routes/perfilAdmin');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'pass secrete',
    cookie :{maxAge : null},
    resave: true,
    saveUninitialized : false
}));

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/registro',verifyLogin,registroRouter);
app.use('/login',verifyLogin,loginRouter);
app.use('/cursos',verifyUser, cursosRouter);
app.use('/perfilAdmin', verifyAdmin, perfilAdminRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
