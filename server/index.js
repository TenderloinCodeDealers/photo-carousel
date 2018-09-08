const express = require('express');
const db = require('../database/database.js');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/:id/api/images', (req, res) => {
  console.log('serving GET');
  const id = req.params.id;
  db.findImage(id, data => {
    res.status(200);
    res.send(data);
  });
});

app.listen(3000, () => console.log('Listening on port 3000!'));
