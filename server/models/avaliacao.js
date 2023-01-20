var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var avaliacaoSchema = new Schema({
    avaliacao: { type: Number, required: true }
}, {
    versionKey: false,
    _id: false //nao cria _id no subdocumento
});

module.exports = avaliacaoSchema;