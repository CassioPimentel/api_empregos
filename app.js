var db = require('./db_config.js'); 
var app = require('./app_config.js');  
var validator = require('validator');
var empregoController = require('./controllers/EmpregoController.js');

app.get('/', function(req, res){

	res.json('Bem vindo a API de empregos');
});

app.get('/emprego', function(req, res){ 

	empregoController.list(function(resp) { 
											 
		res.json(resp);					      
	});										  
});

app.get('/emprego/:id', function(req, res){ 

	var id = req.params.id;

	empregoController.Emprego(id, function(resp) { 
											 
		res.json(resp);					      
	});										  
});

app.get('/emprego/:last_id/:limit', function(req, res){ 

	var last_id= req.params.last_id;
	var limit = req.params.limit;

	empregoController.Emprego(last_id, limit, function(resp) { 
											 
		res.json(resp);					      
	});										  
});

app.post('/emprego', function(req, res){ 

	var titulo = req.body.titulo;
	var descricao = req.body.descricao;
	var cidade = req.body.cidade;
	var estado = req.body.estado;
	var link = req.body.link;

	empregoController.save(titulo, descricao, cidade, estado, link, function(resp){

		res.json(resp);
	});
});