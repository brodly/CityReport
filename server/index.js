const express = require('express');
const path = require('path');
const db = require('../db/index');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/:id', (req, res) => {
  db.raw(`SELECT * FROM reports WHERE id='${req.params.id}'`)
    .then((r) => { res.send(r.rows).end(); })
    .catch((err) => { console.log(err); });
});

app.listen(port, () => console.log(`Listing on ${port}`));
