var db = require('../db_configNomeVgas.js');

exports.getAll = function(titulo, callback){

    var query = { titulo: new RegExp(titulo, "i") };
	db.NomeVagas.find(query, function(error, nomes) {

		if(error) {

			callback({error: 'Não foi possivel retornar as cidades'});
		}else {
			callback(nomes);
		}

	});
};
