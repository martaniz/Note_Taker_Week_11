const router = require("express").Router();
const { notes } = require('../../db/db');

router.get("/notes", (req, res) => {
  console.log("hit the getrout")
   return res.json(notes);
})



module.exports = router;