const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const finyear_zone = new Schema({
    finyearname: {
    type: String,
    required: true,
  },
  finyeardescr: {
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

const finyears = mongoose.model('finyears_zone',finyears_zone);

module.exports = finyears;