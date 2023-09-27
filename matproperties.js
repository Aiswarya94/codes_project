const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const matproperties = new Schema({
    matpropshortname: {
    type: String,
    required: true,
  },
  matpropfullname: {
    type: String,
    required: true,
  },
  matpropdescr: {
    type: String,
    required: true,
  },
  createdat: {
    type: Date,
    default: Date.now,
  },
  createdby: {
    type: String,
    required: true,
  },
  modifiedat: {
    type: Date,
    default: Date.now,
  },
  modifiedby: {
    type: String,
    required: true,
  },
// isActive: {
//     type:Boolean,
//     default:true,
// },
});

const matprop = mongoose.model('matproperties',matproperties);

module.exports =matprop;