const express = require("express")
const router = express.Router()
const indexController = require("../controllers/indexController")
router.get("/text", indexController.getText)
router.get("/html", indexController.getHtml)
router.get("/json", indexController.getJson)

module.exports = router