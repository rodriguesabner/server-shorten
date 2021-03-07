const express = require('express')
const multer = require('multer')
const ShortnerController = require('../controllers/ShortnerController')

const routes = new express.Router()
const upload = multer()

routes.get('/api/', ShortnerController.index)
routes.get('/api/link/:url', ShortnerController.getStats)
routes.post('/api/shortUrls', upload.none(), ShortnerController.store)
routes.get('/api/:url', ShortnerController.clickedLink)

module.exports = routes