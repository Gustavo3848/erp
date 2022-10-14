const express = require('express')
const Route = express.Router()
const controllerTable = require('../controller/table.js')

Route.post('/insert',controllerTable.insert)

module.exports = Route