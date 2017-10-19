var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  //created model loading here
  UserModel = require('./models/UserModel'),
  BookModel = require('./models/BookModel'), 
  bodyParser = require('body-parser');
  
console.log('mongoose instance connection url connection');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/bluehunter'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

console.log('importing routes');
var userRoutes = require('./routes/UserRoutes'); 
var bookRoutes = require('./routes/BookRoutes'); 

console.log('register the routes');
userRoutes(app); 
bookRoutes(app); 

app.listen(port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('Bluehunter RESTful API server started on: ' + port);