var db = require('../db_config.js');

exports.list = function(callback){

	db.Emprego.find({},function(error, empregos) {

		if(error) {

			callback({error: 'Não foi possivel retornar os empregos'});
		}else {
			callback(empregos);
		}

	});
};

exports.Emprego = function(id, callback){

	db.Emprego.findOne({_id: id},function(error, emprego) {

		if(error) {

			callback({error: 'Não foi possivel retornar o emprego'});
		}else {
			callback(emprego);
		}

	});
}

exports.save = function(titulo, descricao, cidade, estado, link, callback){

	new db.Emprego({
		'titulo': titulo,
		'descricao': descricao,
		'cidade': cidade,
		'estado': estado,
		'link': link,
		'created_at': new Date()
	}).save(function(error, emprego){

		if(error) {

			callback({erro: 'Não foi possivel salvar o emprego'});
		} else {

			callback(emprego);
		}
	});

};