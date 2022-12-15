'use strict';

const exp = require('constants');
const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening ${PORT}`);
});

app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const data = fs.readFileSync('./input.txt', 'utf8');

app.get('/api', (req, res) => {
  res.json(data);
});
