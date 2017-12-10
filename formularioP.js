var http=require("http"),
fs=require("fs");

http.createServer(function(req,res){

if(req.url.indexOf("favicon.ico")>0){return ;}
console.log("=================\n\n");
console.log("=================\n\n");
console.log(req);
console.log("=================\n\n");
console.log("=================\n\n");


fs.readFile("./index.html",function(err,html){
	var arreglo_parametro=[],parametros={};

if(req.url.indexOf("?")>0){
	var url_data=req.url.split("?");//parte la cadena desde
	// caracter indicado
// http://localhost:8080/?nombre=hola&data=algo //=>["/","nombre=uriel&data=algo"]
	var arreglo_parametro=url_data[1].split("&");
//[nombre=uriel,data=algo]


}
		res.writeHead(200,{"Content-Type":"text/html"});

		var html_string =html.toString();
	    var variables=html_string.match(/[^\{\}]+(?=\})/g);
		var nombre="Curso Node Js Dariwn";
		var apellido="Uzcategui";


//interando los parametros
	for (var i = 0; i <arreglo_parametro.length; i++) {
	  var parametro=arreglo_parametro[i];
     // nombre=darwin
	  var param_data=parametro.split("=");
	  //[nombre,darwin]
	  parametros[param_data[0]]=param_data[1];
	  //{nombre:darwin}
  }

		for (var i = 0; i < variables.length; i++) {
			//[nombre,apellido]
			var variable=variables[i];
			//pametros[variable]
			//parametros[nombre]
		//var value=eval(variable[i]);
html_string=html_string.replace("{"+variables[i]+"}",parametros[variable]);
		}

		res.write(html_string);//que esl preprocesado
		res.end();
});
}).listen(8080);
