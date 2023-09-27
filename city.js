const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const city_zone = new Schema({
    cityname: {
    type: String,
    required: true,
  },
  citydescr: {
    type: String,
    required: true,
  },
  districtid: {
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

const city = mongoose.model('city_zone',city_zone);

module.exports = city;