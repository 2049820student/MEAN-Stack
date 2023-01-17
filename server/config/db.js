//db.js

var mongoose = require('mongoose');

var connection = mongoose.connect('mongodb+srv://Admin:Admin@sitefilmes.rrnynrp.mongodb.net/SiteFilmes?retryWrites=true&w=majority', { useNewUrlParser: true }).then(() => {
    console.log('\n' + '   |==== Conectado ao Mongodb Atlas. ====|' + '\n');
}).catch(error => {
    console.log('\n' + '   !!!  Erro ao connectar ao Mongodb Atlas  !!!' + '\n');
    console.log(error);
});

module.exports = connection;