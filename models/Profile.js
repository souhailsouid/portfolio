const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  city: {
    type: String
  },
  postCode: {
    type: Number
  },
  adress: {
    type: String
  },
  phone: {
    type: Number
  },
  civility: {
    type: String
  },
  imageUrl : {
    type: String
  },
  status: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
