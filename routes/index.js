const express = require('express');
const router = express.Router();

/* GET show page. */
router.get('/', function(req, res, next) {
  res.render('/animals/show', {title: 'Show Page'});
});

module.exports = router;
