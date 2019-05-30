const express = require('express');
const path = require('path');
const db = require('../db');

const { Report } = require('../db/models')

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/search', (req, res) => {
  const search = Report.find(req.query).collation({ locale: 'en_US', strength: 2 });

  search.exec((err, docs) => {
    if (err) res.send(err)
    else res.send(docs)
  });
});

app.post('/submit', (req, res) => {
  console.log(req);
  res.end();
})

app.listen(port, () => console.log(`Listening on ${port}`));
