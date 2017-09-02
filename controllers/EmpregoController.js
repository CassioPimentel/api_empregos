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

exports.Emprego = function(last_id, limit, callback){

	if(last_id == 0){
		
		db.Emprego.paginate({}, { page: 3, limit: 10 } ,function(error, emprego) {
	
			if(error) {
	
				callback({error: 'Não foi possivel retornar o emprego'});
			}else {
				callback(emprego);
			}
	
		});
		
	}else{
		
		db.Emprego.find({'_id': {'$gt': last_id}}). limit(limit ,function(error, emprego) {
	
			if(error) {
	
				callback({error: 'Não foi possivel retornar o emprego'});
			}else {
				callback(emprego);
			}
	
		});
		
	}

	var empregos = db.Emprego.find().limit(limit);


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