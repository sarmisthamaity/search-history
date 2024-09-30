const router = require('express').Router();
const moviController = require("../controller/movie.controller");

router.get('/filter', moviController.searchMovie);

module.exports = router;
