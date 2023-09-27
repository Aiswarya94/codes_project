const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const unit_name  = new Schema({
    unitname : {
    type: String,
    required: true,
  },
  unitfulln: {
    type: String,
    required: true,
  },
  unitdescr: {
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

const unit  = mongoose.model('unit_name ',unit_name );

module.exports =unit ;