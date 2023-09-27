const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const product_type  = new Schema({
    prodtypename: {
    type: String,
    required: true,
  },
  prodtypedescr: {
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

const product  = mongoose.model('product_type ',product_type );

module.exports =product ;