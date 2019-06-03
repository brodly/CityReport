const axios = require('axios');

const db = require('../../db');
const { Report } = require('../../db/models');

module.exports = {
  getReports: (query, cb) => {
    const search = Report.find(query).collation({ locale: 'en_US', strength: 2 });

    search.exec((err, docs) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, docs);
      }
    });
  },

  submitReportToServer: (server, data) => {
    axios.post(server, data)
      .then(() => console.log(`Report data sent to server @ ${server}`))
      .catch(err => console.error(err));
  },
}