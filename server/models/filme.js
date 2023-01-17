var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var filmeSchema = new Schema({
    _id: { type: objectId, auto: true },
    nome: { type: String, required: false },
}, {
    versionKey: false
});

var filmeModel = mongoose.model('Filme', filmeSchema, 'filmes');

module.exports = filmeModel;