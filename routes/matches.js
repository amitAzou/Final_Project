const express = require('express')
const router = express.Router()
const {
  getMatches
} = require('../controllers/matches')

router.get('/all', getMatches)

module.exports = router
