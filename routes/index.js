const express = require('express')
const router = express.Router()
const login = require('./login')
const podcasts = require('./podcast')
const transfers = require('./transfers')
const matches = require('./matches')

router.use('/login', login)
router.use('/podcast/', podcasts)
router.use('/transfers', transfers)
router.use('/matches', matches)

module.exports = router
