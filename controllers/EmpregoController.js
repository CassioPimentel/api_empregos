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

exports.Busca = function(titulo, cidade, callback){

// '/.' + titulo + './i'
// '/.' + cidade + './i'
	var query = { titulo: {$regex:/aux/} , cidade: {$regex:/Goia/} };
	db.Emprego.find(query,function(error, emprego) {

		if(error) {

			callback({error: 'Não foi possivel retornar o emprego'});
		}else {
			callback(emprego);
		}

	});
}

exports.Vaga = function(id, callback){

	db.Emprego.findOne({_id: id},function(error, emprego) {

		if(error) {

			callback({error: 'Não foi possivel retornar o emprego'});
		}else {
			callback(emprego);
		}

	});
}

exports.Emprego = function(page, limit, callback){

	db.Emprego.paginate({}, { page: page, limit: parseInt(limit) } ,function(error, emprego) {

		if(error) {
			console.log(error);
			callback({error: 'Não foi possivel retornar o emprego', error});
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
