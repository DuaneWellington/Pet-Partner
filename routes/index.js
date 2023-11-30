const express = require('express');
const router = express.Router();
const passport = require('passport');
/* GET show page. */
router.get('/', function(req, res, next) {
  res.redirect('/pets');
});
router.get('/auth/google', passport.authenticate(
  // Which passport strategy is being used?
  'google',
  {
    // Requesting the user's profile and email
    scope: ['profile', 'email'],
    // Optionally force pick account every time
    // prompt: "select_account"
  }
));
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/pets',
    failureRedirect: '/pets'
  }
));
router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/pets');
  });
});

module.exports = router;