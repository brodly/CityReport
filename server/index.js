const express = require('express');
const path = require('path');

const routes = require('./routes')
const { Report } = require('../db/models')

const app = express();
const port = 3000;

const reportServer = 'http://localhost:3001/'

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/search', (req, res) => {
  routes.getReports(req.query, (err, data) => {
    if (err) {
      console.error(err.message);
      res.sendStatus(503);
    } else {
      res.send(data);
    }
  });
});

app.post('/submit', (req, res) => {
  routes.submitReportToServer(reportServer, req.body);
})

app.listen(port, () => console.log(`Listening on ${port}`));
