//web.js

var express = require('express'),
    router = express.Router(),
    path = require("path");

var absPath = path.join(__dirname, "../../app");


router.get('/', function(req, res) {
    res.sendFile(absPath + "/app.html");
});

module.exports = router;