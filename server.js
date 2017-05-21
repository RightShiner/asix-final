'use strict';

// Constants
const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT, function(req, res){
  console.log('Running on http://localhost:' + PORT);
})