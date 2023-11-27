const express = require('express')
const router = express.Router();

const fostersCtrl = require('../controllers/fosters')

router.post('/pets/:id/fosters', fostersCtrl.create)

module.exports = router