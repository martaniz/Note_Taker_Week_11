const router = require("express").Router();
const notes = require('../../db/db.json');

router.get("/notes", function(req, res) {
  return res.json(notes);
      res.send(["notes", 404]); 

//  res.send(notes);
});


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


// DELETE /api/users/1
router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});






module.exports = router;