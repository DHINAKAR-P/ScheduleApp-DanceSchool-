var express  = require('express');
var app      = express();
var http = require("http");
var path = require("path");
var port     = process.env.PORT || 3000;
var mongoose = require('mongoose');
var flash    = require('connect-flash');

var clientPath = path.resolve(__dirname, "client");

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var router = require("./Routers/route");


//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/",express.static(clientPath));
app.use("/api", router);
app.all('*', function (req, res) { 
  res.status(200);//.sendFile(path.join(__dirname, '/client/index.html')); 
});

mongoose.connect('mongodb://localhost:27017/DanceSchool');
mongoose.connection.once('connected', function() {
	console.log("Connected to database");
});

app.listen(port);
console.log('Express server listening on port ' + port);
