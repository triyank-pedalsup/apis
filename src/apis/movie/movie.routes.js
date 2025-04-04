const express = require('express');
const router = express.Router();
const movieController = require('./movie.controller.js');

router.post('/createMovie', movieController.createMovie);
router.get('/getAllMovie',movieController.getAllMovie);
router.delete('/deleteMovie/:id',movieController.deleteMovie);
router.put('/updateMovie/:id',movieController.updateMovie);

module.exports = router;