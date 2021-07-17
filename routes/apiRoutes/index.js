const router = require("express").Router();
const notes = require('../../db/db.json');

router.get("/notes", function(req, res) {
    console.log("hit the getrout")
    console.log(notes)
    return res.json(notes)
//  res.send(notes);
})

// router.post("/notes", function(req, res){
//  save the note to db.json
//})

router.post('/notes', (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = notes.length.toString();

  if (!validateNotes(req.body)) {
    res.status(400).send('The notes is not properly formatted.');
  } else {
    const notes = createNewNotes(req.body, notes);
    res.json(notes);
  }
});




module.exports = router;