const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const state_name  = new Schema({
    statename : {
    type: String,
    required: true,
  },
  statedescr: {
    type: String,
    required: true,
  },
  state_countryr: {
    type: String,
    required: true,
  },
  state_img_url: {
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

const states  = mongoose.model('state_name ',state_name );

module.exports =states ;