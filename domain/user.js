var mongoose = require('config/mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
  created: {
    type: Date,
    default: Date.now(),
  },

  links: [

   {
    longlink: {
      type: String,
      unique: true,
      required: true,
    },
    shortlink: {
      type: String,
      unique: true,
      required: true,
    },
    count: {
      type: Number,
      default: null,
    },
    tags: [String],

  },

  ],

});

User.plugin(passportLocalMongoose);

exports.User = mongoose.model('User', User);
