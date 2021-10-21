const app = require('express').Router() 
const path = require('path')
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/db.json'))
);

module.exports = app