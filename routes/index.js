const express = require('express');
const router = express.Router();

/* GET show page. */
router.get('/', function(req, res, next) {
  res.redirect('/pets');
});

module.exports = router;