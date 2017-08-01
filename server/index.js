var express = require('express');
var parser = require('body-parser');
var cors = require('cors');
var path = require('path');

//file dependencies
var router = require('./routes');
require('./db/config');
require('./db');

//setting up express
var PORT = 3000;
var app = express();
app.use(express.static(path.join(__dirname, '../static')));
app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

//set up routes
app.use('/api', router);

//set up server
app.listen(PORT, function(err){
  if (err) {
    console.log('error in connecting to server');
  } else {
    console.log('connected to server on port ', PORT);
  }
});