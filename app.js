var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const port = 8080

var indexRouter = require('./server/routes/index');
var usersRouter = require('./server/routes/users');
var routes = require('./server/routes/routes')

let errorHandlingMiddleware = require('./server/middlewares/errorHandlingMiddleware')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
// app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);
// app.use(errorHandlingMiddleware);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404);
  let undefinedRoute = {"Status":404, "Message":"Undefined Route"}
  res.send(JSON.stringify(undefinedRoute));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.status(err.status || 500);
  let genericError = {"Status":500, "Message":"Server Error: Something went wrong!"}
  res.send(err.errors || genericError);
});

module.exports = app;
