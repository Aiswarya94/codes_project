const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chem_name = new Schema({
    chemname : {
    type: String,
    required: true,
  },
  chemengname: {
    type: String,
    required: true,
  },
  chemdescr: {
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

const chemnames  = mongoose.model('chem_name ',chem_name );

module.exports =chemnames ;