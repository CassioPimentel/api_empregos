var db = require('../db_configCidade.js');

exports.get = function(cidade, callback){

	db.Cidade.find({'cidade': 'Assis Brasil - AC' }, function(error, cidades) {

		if(error) {

			callback({error: 'Não foi possivel retornar as cidades'});
		}else {
			callback(cidades);
		}

	});
};

exports.list = function(callback){

	db.Cidade.find({},function(error, cidades) {

		if(error) {

			callback({error: 'Não foi possivel retornar os empregos'});
		}else {
			callback(cidades);
		}

	});
};
