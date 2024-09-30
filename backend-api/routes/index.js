const router = require('express').Router();
const movieRoute = require("../routes/movie.route");

router.use('/', movieRoute);

module.exports = router;
