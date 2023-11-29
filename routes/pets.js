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

// router -> POST /pets
// router.post('/', petsCtrl.create)
//router -> GET /pets/:id
router.get('/:id', petsCtrl.show)

//router -> navigate to the results page (results.ejs)
//router.post('/results/:id, petsCtrl.results)

module.exports = router;