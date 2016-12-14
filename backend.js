var express = require('express');
// var bcrypt = require('bcrypt');
// var http = require('http').Server(app);
var bodyParser = require('body-parser');
var bluebird = require('bluebird');
var mongoose = require('mongoose');
mongoose.Promise = bluebird;

var app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/twittertwitter');

//database schema
var User = mongoose.model('User', {
  screen_name: { type: String, maxlength: 20, validate: /[a-zA-Z0-9_]+/, required: true},
  password: { type: String, minlength: 6, required: true },
  created_at: Date,
  name: { type: String, minlength: 1, maxlength: 20, required: true }, //20 chars
  location: String,
  url: String,
  description: String
});

var Tweets = mongoose.model('Tweet', {
  text: { type: String, minlength: 1, maxlength: 140, required: true},
  likes: Number,
  created_at: Date,
  user: String
});

//Testing
app.get('/world', function(request, response){
    console.log(request);
    var test1 = {
        prop1: 'property 1',
        prop2: 'property 2',
        prop3: 'property 3'
    };
    response.json(test1);
});



app.listen(3000, function (){
    console.log('Listing on 3000');
});
