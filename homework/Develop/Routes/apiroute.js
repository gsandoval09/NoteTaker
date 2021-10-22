const express = require("express");
const router = express.Router();
const action = require("../db/action")
router.get("/notes", (req, res) => {
  action.getNotes().then(notes => res.json(notes))
})



router.post("/notes", (req, res) => {
  action.addNote(req.body)
    .then(notes => res.json(notes))
});
//action to delete note 
router.delete("/notes/:id", (req, res) => {
  action.deleteNote(req.params.id).then(notes => res.json(notes))
  console.info("recieved delete request")
});



module.exports = router
