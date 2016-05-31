var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('config/mongoose');
var User = require('model/user').User;

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());

passport.deserializeUser(User.deserializeUser());