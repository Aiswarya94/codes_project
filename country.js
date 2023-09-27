const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const countrytype = new Schema({
    countryname: {
    type: String,
    required: true,
  },
  country_regionid: {
    type: String,
    required: true,
  },
  countrydescription: {
    type: String,
    required: true,
  },
  countryimgurl:{
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

const country = mongoose.model('countrytype', countrytype);

module.exports = country;