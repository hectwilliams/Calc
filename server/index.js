const express = require('express');
const app = express(); // constructor call
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3001;
const host = 'localhost';
const path = require('path');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, '..','public')));

app.listen(port, host, (msg)=> {
  console.log('express server running on http://localhost:' + port );
});

app.get('/hello', (req, res)=> {
  res.status(201);
});