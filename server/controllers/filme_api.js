var express = require("express"),
    router = express.Router(),
    filme = require("../models/filme.js");

router.get("/", function(req, res) {
    filme.find({}, function(err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
});

router.get("/:id", function(req, res) {
    var id = req.params.id;
    filme.find({ _id: id }, function(err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data[0]);
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
        res.send("created");
    });
});

router.post("/:id", function(req, res) {
    var id = req.params.id;
    var obj = req.body;

    filme.findByIdAndUpdate(id, {
            nome: obj.nome,
            descricao: obj.descricao,
            data_lancamento: obj.data_lancamento,
            idioma: obj.idioma,
            imagem: obj.imagem,
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
    filme.findByIdAndRemove(id, function(err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("deleted");
    });
});

module.exports = router;