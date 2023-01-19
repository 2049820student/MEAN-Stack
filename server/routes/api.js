//api.js

var express = require('express'),
    router = express.Router();

router.use("/atores", require("../controllers/ator_api"));
router.use("/filmes", require("../controllers/filme_api"));
router.use("/diretores", require("../controllers/diretor_api"));


module.exports = router;