var http = require("http"),
	  fs = require("fs"),
   pasar = require("./leer_parametro"),
  render = require("./render-vista");

var p=pasar.pasar;
var h=render.render;
//console.log(p);

http.createServer(function(req,res){

if(req.url.indexOf("favicon.ico")>0){return ;}


fs.readFile("./index.html",function(err,html){
	var html_string =html.toString();
	var variables=html_string.match(/[^\{\}]+(?=\})/g);
	var nombre="Curso Node Js Dariwn";
	var apellido="Uzcategui";

	var parametros= p(req);

//interando

	res.writeHead(200,{"Content-Type":"text/html"});
	res.write(html_string);//que esl preprocesado
	res.end();
});
}).listen(8080);
