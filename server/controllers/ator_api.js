var express = require("express"),
    router = express.Router(),
    ator = require("../models/ator.js");

router.get("/", function(req, res) {
    ator.find({}, function(err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
});

router.get("/:id", function(req, res) {
    var id = req.params.id;
    ator.find({ _id: id }, function(err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data[0]);
    });
});

router.post("/", function(req, res) {
    var obj = req.body;
    var model = new ator(obj);
    model.save(function(err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("created");
    });
});

router.post("/:id", function(req, res) {
    var id = req.params.id;
    var obj = req.body;

    ator.findByIdAndUpdate(id, {
            nome: obj.nome,
            idade: obj.idade,
        },
        function(err) {
            if (err) {
                res.send("error");
                return;
            }
            res.send("updated");
        });
});

router.delete("/:id", function(req, res) {
    var id = req.params.id;
    ator.findByIdAndRemove(id, function(err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("deleted");
    });
});

module.exports = router;