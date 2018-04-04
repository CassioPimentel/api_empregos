var db = require('../db_configNomeVagas.js');

exports.get = function(titulo, callback){

    var query = { titulo: new RegExp(titulo, "i") };
	db.NomeVagas.find(query, function(error, nomes) {

		if(error) {

			callback({error: 'Não foi possivel retornar as cidades'});
		}else {
			callback(nomes);
		}

	});
};

exports.getAll = function( callback){

	db.NomeVagas.find({},function(error, nomes) {

		if(error) {

			callback({error: 'Não foi possivel retornar as cidades'});
		}else {
			callback(nomes);
		}

	});
};
