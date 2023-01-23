var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var avaliacaoSchema = require('./avaliacao');
var generoSchema = require('./genero');

var filmeSchema = new Schema({
    _id: { type: objectId, auto: true },
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    data_lancamento: { type: Date, required: true },
    idioma: { type: String, required: true },
    imagem:{ type: String ,required: true },
    atores: [{ type: Schema.Types.ObjectId, ref: 'atorModel', required: false }],
    diretores: [{ type: Schema.Types.ObjectId, ref: 'diretorModel', required: false }],
    avaliacao: [{ type: avaliacaoSchema, required: false}], //tirar [] caso nao queira array
    genero: [{ type: generoSchema, required: false}],
}, {
    versionKey: false
});

var filme = mongoose.model('filmeModel', filmeSchema, 'filmes');

module.exports = filme;


//------Habilitação do populate para ir buscar os IDS gerados automaticamente EX:(63c9bbe129113960787a0883)-----
filmeSchema.pre('find', function() {
    this.populate('atores');
    this.populate('diretores');
});
