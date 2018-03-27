var db = require('./db_config.js'); 
var db2 = require('./db_configCidade.js'); 
var app = require('./app_config.js');  
var validator = require('validator');
var empregoController = require('./controllers/EmpregoController.js');
var cidadeController = require('./controllers/CidadeEstadoController.js');

app.get('/', function(req, res){

	res.json('Bem vindo a API de empregos');
});

app.get('/vagas', function(req, res){ 

	empregoController.list(function(resp) { 
											 
		res.json(resp);					      
	});										  
});

app.get('/vaga/:id', function(req, res){ 

	var id = req.params.id;

	empregoController.Vaga(id, function(resp) { 
											 
		res.json(resp);					      
	});										  
});

app.get('/cidade/:nome', function(req, res){ 

	var cidade = req.params.nome;
	console.log(cidade);
	CidadeController.get(cidade, function(resp) { 
											 
		res.json(resp);					      
	});										  
});

app.get('/emprego/:page/:limit', function(req, res){ 

	var page  = req.params.page;
	var limit = req.params.limit;

	empregoController.Emprego(page, limit, function(resp) { 
											 
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
