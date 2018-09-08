const express = require('express');

const app = express();

app.use(express.static('public/index.html'));

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/:id/api/images', (req, res) => res.send('TODO get data from database'));

app.listen(3000, () => console.log('Listening on port 3000!'));
