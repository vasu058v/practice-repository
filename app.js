var express = require('express');
//global.appBasePath = __dirname;

console.log("sjdfhgsjghf")
//require('app-module-path').addPath(appBasePath);

var path = require('path');

var favicon = require('serve-favicon');

var logger = require('morgan');
var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');

var routes =('/vasu',require('./routes/index'));
var routes =('/vasu', require('./vasu/vasu'));
var routes = ('/vasu',require('./vasu1/vasu1'));
//var routes = require('vasu3');
//var moduleName= __filename;
//var config=require('config');

//var users = require('./routes/users');
//var ejs = require("ejs");




// view engine setup
/*alert(app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'jade');*/

//app.set('views', __dirname + '/views');

//app.engine('html', require('ejs').renderFile);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
var app = express();
app.use(logger('dev'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
console.log("sdfkgjhdfjkg")

app.use('/vasu', routes);



// catch 404 and forward to error handler

app.use(function(req, res, next) 
{
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers

// development error handler
// will print stacktrace

if (app.get('env') === 'development') 
{
 
 app.use(function(err, req, res, next) 
{
    
res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}


// production error handler
// no stacktraces leaked to user

app.use(function(err, req, res, next)
 {
  res.status(err.status || 500);
  
res.render('error', {
    message: err.message,
    error: {}
  });
});



var http = require("http");
var server = http.createServer(function(request, response) {
   /* response.writeHead(400, {"Content-Type": "text/html"});
    response.write("<!DOCTYPE 'html'>");
    response.write("<html>");
    response.write("<head>");
    response.write("<title>Hello World Page</title>");
    response.write("</head>");
    response.write("<body>");
    response.write("Hello World!");
    response.write("</body>");
    response.write("</html>");*/
    
});

/*server.listen(80);
console.log("Server is listening on port");*/

module.exports = app;













