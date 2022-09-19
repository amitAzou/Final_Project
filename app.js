require('dotenv').config()
const express = require('express')
const routes = require('./routes/index.js')
const {authenticateToken} = require('./middlewares/authenticationMiddleware')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const config = require('config')
const cors = require('cors')
app.use(cors())
app.use(express.static(path.join(__dirname, config.static)))
app.use(bodyParser.json())
app.use(authenticateToken)
app.use(routes)

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, config.static, 'index.html'))
})

module.exports = app
