const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supplytype  = new Schema({
    supplyTypename : {
    type: String,
    required: true,
  },
  supplyTypedescr: {
    type: String,
    required: true,
  },
//   regionimagelink: {
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

const supply  = mongoose.model('supplytype ',supplytype );

module.exports =supply ;