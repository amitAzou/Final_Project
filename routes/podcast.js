const express = require('express')
const router = express.Router()
const {login, refreshPage} = require('../controllers/podcast')

router.post('/refresh', refreshPage)

router.post('/login', login)

module.exports = router
