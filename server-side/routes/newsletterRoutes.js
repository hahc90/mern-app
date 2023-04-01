const express = require('express')
const router = express.Router()
const newsletterController = require('../controllers/newsletterController')

router.route('/')
    .post( newsletterController.addNewsletterListEmail )

module.exports = router