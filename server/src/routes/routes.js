const express = require("express")
const promptController = require("../controllers/prompt-controller")

const routes = express.Router()

routes.post('/api/prompt', promptController.sendText)
// http://localhost:5001/api/prompt

module.exports = routes