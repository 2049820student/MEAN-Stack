var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var diretorSchema = new Schema({
    _id: { type: objectId, auto: true },
    nome: { type: String, required: true },
    idade: { type: String, required: true },
}, {
    versionKey: false
});

var diretor = mongoose.model('diretorModel', diretorSchema, 'diretores');

module.exports = diretor;