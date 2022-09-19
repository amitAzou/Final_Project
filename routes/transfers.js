const express = require('express')
const router = express.Router()
const {getTransfers} = require('../controllers/transfers')

router.get('/:countryId', getTransfers)

module.exports = router
