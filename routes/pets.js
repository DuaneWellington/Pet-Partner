// PATH: routes/pets.js
const express = require('express');
const router = express.Router();

//create the controller
const petsCtrl = require('../controllers/pets')

//router -> GET /pets/index using default path
router.get('/', petsCtrl.index)

//router -> GET /pets/match
router.get('/match', petsCtrl.match)

//router -> POST /pets
router.post('/', petsCtrl.create)

// //router -> GET /pets/:id
// router.get('/:id', petsCtrl.show)

module.exports = router;