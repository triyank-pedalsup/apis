const express = require('express');
const router = express.Router();
const movieController = require('./movie.controller.js');

router.post('/createMovie', movieController.createMovie);
router.get('/getAllMovie',movieController.getAllMovie);

module.exports = router;