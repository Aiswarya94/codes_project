const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const product_name  = new Schema({
    productname: {
    type: String,
    required: true,
  },
  prodctdescr: {
    type: String,
    required: true,
  },
//   matpropdescr: {
//     type: String,
//     required: true,
//   },
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

const productname  = mongoose.model('product_name ',product_name );

module.exports =productname ;