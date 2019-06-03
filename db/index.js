const axios = require('axios');
const mongoose = require('mongoose');
const { Report } = require('./models');
// const testdata = require('../db/testdata.js');
const db = mongoose.connection

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // axios.get('https://data.lacity.org/resource/pvft-t768.json')
  // new Promise((resolve, reject) => resolve())
  //   .then(data => {
  //     Report.insertMany(data, err => {
  //       if (err) throw err;
  //     })
  //   })
  //   .catch(err => console.error(err));

});

module.exports = db;

