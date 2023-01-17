//api.js

var express = require('express'),
    router = express.Router();

router.use("/filmes", require("../controllers/filmes.api"));


module.exports = router;