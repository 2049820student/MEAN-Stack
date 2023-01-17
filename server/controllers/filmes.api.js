var express = require("express"),
    router = express.Router(),
    filme = require("../models/filme.js");

router.get('/', (req, res) => {
    Filme.find({}, (error, filmes) => {
        if (error) {
            res.json({ success: false, message: `Failed to load all filmes. Error: ${error}` });
        } else {
            res.render('filmes', { filmes: filmes });
        }
    });
});

router.get("/:_id", function(req, res) {
    var id = req.params._id;
    filme.find({ id }, function(err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
});

router.post("/", function(req, res) {
    var obj = req.body;
    var model = new filme(obj);
    model.save(function(err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("Filme criado com sucesso");
    });
});

router.post("/:_id", function(req, res) {
    var id = req.params._id;
    var obj = req.body;

    filme.findByIdAndUpdate(id, obj, function(err) {
            if (err) {
                res.send("error");
                return;
            }
            res.send("updated");
        });
});

router.delete("/:_id", function(req, res) {
    var id = req.params._id;
    filme.findByIdAndRemove(id, function(err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
});

module.exports = router;