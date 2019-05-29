const mongoose = require('mongoose');
const reportSchema = new mongoose.Schema({
  "createddate": Date,
  "streetname": String,
  "latitude": Number,
  "suffix": String,
  "tbmpage": Number,
  "policeprecinct": String,
  "requesttype": String,
  "actiontaken": String,
  "apc": String,
  "requestsource": String,
  "addressverified": String,
  "ncname": String,
  "assignto": String,
  "direction": String,
  "longitude": Number,
  "owner": String,
  "cd": Number,
  "address": String,
  "srnumber": String,
  "mobileos": String,
  "tbmcolumn": String,
  "zipcode": Number,
  "tbmrow": Number,
  "createdbyuserorganization": String,
  "housenumber": Number,
  "nc": Number,
  "updateddate": Date,
  "anonymous": String,
  "location": {
    "latitude": Number,
    "needs_recoding": Boolean,
    "longitude": Number
  },
  "cdmember": String,
  "status": String
});
const Report = mongoose.model('Report', reportSchema);
module.exports = Report;
