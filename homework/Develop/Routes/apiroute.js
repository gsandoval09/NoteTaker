const express = require("express");
const router = express.Router();
const action = require("../db/action")
router.get("/notes",(req, res) => {
    action.getNotes().then(notes => res.json(notes))
  })
  router.post("/notes",(req, res) => {
  action.addNote(req.body)
  .then(notes => res.json(notes))
  });


  module.exports = router

// const app = require('express').Router() 
// const path = require('path')
// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '../public/db.json'))
// );

// app.get('/notes', (req, res) =>
//   res.sendFile(path.join(__dirname, '../public/notes.html'))
// );


// module.exports = app