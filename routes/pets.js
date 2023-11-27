// PATH: routes/pets.js
const express = require('express');
const router = express.Router();

//create the controller
const petsCtrl = require('../controllers/pets')

//router -> GET /pets/index using default path
router.get('/', petsCtrl.index)
router.get('/', (req, res) => {
    res.send('This is the /pets route');
});

//router -> GET /pets/new
router.get('/new', petsCtrl.new)

//router -> POST /pets
router.post('/', petsCtrl.create)
router.get('/:id', petsCtrl.show)

module.exports = router;