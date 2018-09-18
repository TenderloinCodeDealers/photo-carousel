const express = require('express');
const path = require('path');
const db = require('../database/database.js');

const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.static(path.join(__dirname, '../public')));
app.use('/:id', express.static(path.join(__dirname, '../public')));

app.get('/:id/api/images', (req, res) => {
  const id = req.params.id;
  console.log(`serving GET for id ${id}`);
  db.findImage(id, data => {
    res.status(200);
    res.send(data);
  });
});

app.listen(3001, () => console.log('Listening on port 3001!'));
