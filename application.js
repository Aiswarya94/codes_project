const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const application_areaname = new Schema({
    applareaname: {
    type: String,
    required: true,
  },
  applareadescr: {
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
isActive: {
    type:Boolean,
    default:true,
},
});

const application = mongoose.model('application_areaname', application_areaname);

module.exports = application;