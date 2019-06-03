const express = require('express');
const submitForm = require('./callForm');

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
  submitForm(req.body);
});

app.listen(port, () => console.log(`Listening on ${port}`));
