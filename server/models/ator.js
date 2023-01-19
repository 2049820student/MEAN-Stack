var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var atorSchema = new Schema({
    _id: { type: objectId, auto: true },
    nome: { type: String, required: true },
    idade: { type: String, required: true },
}, {
    versionKey: false
});

var ator = mongoose.model('atorModel', atorSchema, 'atores');

module.exports = ator;