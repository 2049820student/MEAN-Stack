var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var generoSchema = new Schema({
    nome: { type: String, required: true }
}, {
    versionKey: false,
    _id: false //nao cria _id no subdocumento
});

module.exports = generoSchema;