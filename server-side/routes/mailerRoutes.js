const express = require('express')
const router = express.Router()
const mailerController = require('../controllers/mailerController')

router.route('/')
    .post( mailerController.handleUserContact )

module.exports = router