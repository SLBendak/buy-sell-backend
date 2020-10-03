const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  location: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  itemSell: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Listing'
  },
  itemBuy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Listing'
  }
});

module.exports = User = mongoose.model('User', UserSchema);