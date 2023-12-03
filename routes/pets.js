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

//router -> GET / 
router.post('/findMatch', petsCtrl.findMatchingPet)
// router.post('/findMatch', petsCtrl.findMatchingPet)

// Post /invoice to show the pet selected along with the user information
router.post('/:id', petsCtrl.addUserToPet)


// router -> POST /pets
// router.post('/', petsCtrl.create)
//router -> GET /pets/:id
router.get('/:id', petsCtrl.show)

//router -> navigate to the results page (results.ejs)
//router.post('/results/:id, petsCtrl.results)

  //  ******** TOP - DELETE FUNCTION FOR PET DATABASE - TOP ************

  router.delete('/:id', petsCtrl.deletePet);

  // ******** BOTTOM - DELETE FUNCTION FOR PET DATABASE - BOTTOM ************



module.exports = router;