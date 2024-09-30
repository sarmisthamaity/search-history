const router = require('express').Router();
const moviController = require("../controller/movie.controller");

router.get('/movie', moviController.searchMovie);

module.exports = router;
