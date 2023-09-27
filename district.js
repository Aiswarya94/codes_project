const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const district_zone = new Schema({
    districtname: {
    type: String,
    required: true,
  },
  districtstateid: {
    type: String,
    required: true,
  },
  districtdescr: {
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

const district = mongoose.model('district_zone',district_zone);

module.exports = district;