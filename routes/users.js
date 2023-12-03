// PATH: routes/user.js

const express = require('express')
const router = express.Router();

//create the controller
const usersCtrl = require('../controllers/users')

//router -> GET /users using default path
router.get('/', usersCtrl.index)

//router -> POST /users
// router.get('/users', usersCtrl.index)

//router -> POST /users
// router.post('/', usersCtrl.newUser)

router.post('/', usersCtrl.create)

// GET /animals/match/:id
router.get('/match/:id', usersCtrl.showMatchForm);

// GET /animals/match
router.get('/animals/match', usersCtrl.renderMatchForm);

module.exports = router