const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const product_name  = new Schema({
    regionname : {
    type: String,
    required: true,
  },
  regiondescr: {
    type: String,
    required: true,
  },
  regionimagelink: {
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

const region  = mongoose.model('region_name ',region_name );

module.exports =region ;