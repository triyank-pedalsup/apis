const express = require('express');
const router = express.Router();
const userRoutes = require('../apis/user/user.routes.js');
const movieRoutes = require('../apis/movie/movie.routes.js');

router.use('/user', userRoutes);
router.use('/movie', movieRoutes);

module.exports = router;