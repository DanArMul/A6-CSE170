var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');
var methodOverride = require('method-override');
var exphbs  = require('express-handlebars');


var index = require('./routes/index');
var usersRouter = require('./routes/users');
var allRoutes = require('./routes/allRoutes');
var count = require('./routes/count');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine(
  "handlebars",
  exphbs({
    extname: "handlebars",
    defaultLayout: false
  })
);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', allRoutes);
app.use('/users', usersRouter);

if ('development' == app.get('env')) {
  app.use(createError);
}
//add routes
app.get('/', index.view);
//app.get('/count/:bodyInfo',count.viewIntake); //this code incomplete + makes node app.js startup very long

module.exports = app;

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
