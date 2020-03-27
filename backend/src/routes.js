const express = require('express')
const ongController = require('./controllers/ongController')
const incidentController = require('./controllers/incidentController')
const profileController = require('./controllers/profileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.post('/session', SessionController.create )

routes.get('/ongs', ongController.index)
routes.post('/ongs', ongController.checkOngExists, ongController.create)

routes.get('/incidents', incidentController.index)
routes.post('/incidents', incidentController.create)
routes.delete('/incidents/:id', incidentController.delete)

routes.get('/profile', profileController.indexOfOng)
routes.get('/profile/:id', profileController.index)


module.exports = routes