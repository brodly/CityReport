const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/:id', (req, res) => {
  console.log(res);
});

app.listen(port, () => console.log(`Listing on ${port}`));