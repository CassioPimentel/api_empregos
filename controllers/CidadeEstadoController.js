var db = require('../db_configCidade.js');

exports.get = function(cidade, callback){

	db.Cidade.find({cidade: cidade}, function(error, cidades) {

		if(error) {

			callback({error: 'Não foi possivel retornar as cidades'});
		}else {
			callback(cidades);
		}

	});
};