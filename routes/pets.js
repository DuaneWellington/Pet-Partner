// PATH: routes/pets.js
const express = require('express');
const router = express.Router();

//create the controller
const petsCtrl = require('../controllers/pets');
// const pets = require('../controllers/pets');

//router -> GET /pets/index using default path
router.get('/', petsCtrl.index)

//router -> GET /pets/match
router.get('/match', petsCtrl.match)

// Router -> POST / execute the findMatchingPet async function in the pets controller when the match.ejs form is submitted
router.post('/findMatch', petsCtrl.findMatchingPet)

// Post /invoice to show the pet selected along with the user information
router.post('/:id', petsCtrl.addUserToPet)

//icebox features below
// router.post('/', petsCtrl.create)
//router -> GET /pets/:id
router.get('/:id', petsCtrl.show)

//router -> navigate to the results page (results.ejs)
//router.post('/results/:id, petsCtrl.results)

  //  ******** TOP - DELETE FUNCTION FOR PET DATABASE - TOP ************

  router.delete('/:id', petsCtrl.deletePet);

  // ******** BOTTOM - DELETE FUNCTION FOR PET DATABASE - BOTTOM ************

module.exports = router;