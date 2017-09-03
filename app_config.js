var express = require('express');
var cors = require('cors')

var app = module.exports = express();

app.use(cors())

var bodyparser = require('body-parser');

app.listen(process.env.PORT || 8080);

app.use(bodyparser.json());

app.set('json spaces', 2);	
app.use(bodyparser.urlencoded({

	extended: true		
}));
