var db_string = 'mongodb://cassiowin98:eng1211048@ds042729.mlab.com:42729/empregos'; //string de conexao para o servidor mongo db

var mongoose = require('mongoose').connect(db_string); //faz a requisição do mongoose passando a string de conexão

var db = mongoose.connection; //conecta ao banco

db.on('error', console.error.bind(console, 'Erro ao conectar no banco')); //se houver algum erro, mostra na tela

db.once('open', function(){ //no evento de abertura da conexao, cria o esquema do banco

	var empregosSchema = mongoose.Schema({
		titulo: String,
		descricao: String,
		cidade: String,
		estado: String,
		link: String,
		created_at: Date
	});

	exports.Emprego = mongoose.model('Emprego', empregosSchema);
});
