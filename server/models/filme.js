var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var avaliacaoSchema = require('./avaliacao');
var generoSchema = require('./genero');

var filmeSchema = new Schema({
    _id: { type: objectId, auto: true },
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    data_lancamento: { type: String, required: true },
    atores: [{ type: Schema.Types.ObjectId, ref: 'atorModel' }],
    diretores: [{ type: Schema.Types.ObjectId, ref: 'diretorModel' }],
    idioma: { type: String, required: true },
    avaliacao: [{ type: avaliacaoSchema, required: true}], //tirar [] caso nao queira array
    genero: [{ type: generoSchema, required: true}],
}, {
    versionKey: false
});

var filme = mongoose.model('filmeModel', filmeSchema, 'filmes');

module.exports = filme;