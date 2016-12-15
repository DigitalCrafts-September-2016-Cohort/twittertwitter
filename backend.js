var express = require('express');
// var bcrypt = require('bcrypt'); //maybe use bcrypt-promise
// var http = require('http').Server(app);
var bodyParser = require('body-parser');
var bluebird = require('bluebird');
var mongoose = require('mongoose');
mongoose.Promise = bluebird;
//use uuid

var app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

mongoose.connect('mongodb://jesslyn_autumn:jesslyn_autumn@ds133368.mlab.com:33368/twittertwitter');

//database schema
var Users = mongoose.model('User', {
  screen_name: { type: String, maxlength: 20, validate: /[a-zA-Z0-9_]+/, required: true},
  password: { type: String, minlength: 6, required: true },
  created_at: Date,
  name: { type: String, minlength: 1, maxlength: 20, required: true }, //20 chars
  location: String,
  url: String,
  description: String,
  following: { type: [String]},
  followers: { type: [String]}
});

var Tweets = mongoose.model('Tweet', {
  text: { type: String, minlength: 1, maxlength: 140, required: true},
  likes: Number,
  created_at: Date,
  user: String
});


function auth(request, response, next) {

}

//Testing
app.get('/world', function(request, response){

    Tweets.find({})
    .then(function(docs){
        response.json(docs);
    })
    .catch(function(err) {
        response.status(500);
    });
});

app.post('/signup', function(request,response) {
    //signup
    //grab other form fields
    var password = request.body.password;
    bcrypt.hash(password, 12, function(err, hash) {
        Users.update({}).then(function(){

            ///give boolean to front end that changes state


        })
        .catch(function(){
            response.status(401);
        });
    });
});

app.post('/login', function(request, response) {
  //login
});


//Everything below needs auth

// app.use(auth);

//user home
app.get('/user_timeline', function(request, response) {
  var screen_name = 'jesslyn';
  Tweets.find({ user: screen_name}).then(function(docs) {
    console.log(docs);
  });
  // console.log(Tweets.find({}));
  Users.find({ screen_name: screen_name })
    .then(function(user) {
      console.log(user);
      console.log(user[0].following);
      console.log(user[0].following.concat([user[0].screen_name]));

      return Tweets.find({
        user: {
          $in: user[0].following.concat([user[0].screen_name])
        }
      });
    })
    .then(function(tweets) {
      console.log(tweets);
      response.json(tweets);
    });
});

//user page
app.get('/user/id', function(request, response) {

});

//tweets
app.get('/compose_tweet', function(request, response) {

});

app.post('/compose_tweet', function(request, response) {

});


//logout
app.post('/logout', function(request, response) {

});


app.listen(3000, function (){
    console.log('Listing on 3000');
});
