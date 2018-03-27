var db_string = 'mongodb://cassiowin98:eng1211048@ds111336.mlab.com:11336/cidades'; //string de conexao para o servidor mongo db

var mongoose = require('mongoose').connect(db_string); //faz a requisição do mongoose passando a string de conexão
var mongoosePaginate = require('mongoose-paginate');

var db = mongoose.connection; //conecta ao banco

db.on('error', console.error.bind(console, 'Erro ao conectar no banco')); //se houver algum erro, mostra na tela

db.once('open', function(){ //no evento de abertura da conexao, cria o esquema do banco

	var cidadeSchema = mongoose.Schema({
		cidadeEstado: String
	});

	cidadeSchema.plugin(mongoosePaginate);

	exports.Cidade = mongoose.model('Cidade', cidadeSchema);
});
