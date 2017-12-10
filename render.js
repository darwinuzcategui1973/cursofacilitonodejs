var http=require("http"),
fs=require("fs");
//var
http.createServer(function(req,res){
fs.readFile("./index.html",function(err,html){

		res.writeHead(200,{"Content-Type":"text/html"});

//aqui tranformo en cadena de string en contenido html
		var html_string =html.toString();
//Expresión regular que busca en el HTML DONDE HAYA {X}
	    var variable=html_string.match(/[^\{\}]+(?=\})/g);
		var nombre="Curso Node Js Dariwn";
		var apellido="Uzcategui";
		// tenemos este arreglo en varible  ['nombre','apellido']
		for (var i = 0; i < variable.length; i++) {
//Lo ejecutamos como código de javaScrip
//para obtener el valor de dicha variable
		var value=eval(variable[i]);

//remplazamos el contenido conllave{x} por su valor correspondiente
		html_string=html_string.replace("{"+variable[i]+"}",value);
		}

		//res.write(html);
		//mandamos el contenido
		res.write(html_string);//que esl preprocesado
	//	res.write(JSON.stringify({nombre:"Darwin",usuarionombre:"dacurso"}));
		res.end();

});

}).listen(8080);
