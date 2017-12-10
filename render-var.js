var http=require("http"),
fs=require("fs");

http.createServer(function(req,res){
fs.readFile("./index.html",function(err,html){
		var html_string =html.toString();//aqui obtenemos html como string
		var variable=html_string.match(/[^\{\}]+(?=\})/g); //las funcion match // le puede pasar una expresion regular
		var nombre="Darwin";
		var apellido="uzcategui";
		var otra_variable="cualquier cosa";
		console.log(variable);
		// ahora recorro el arreglo
		// tenemos este arreglo en varible  ['nombre','apellido']
		for (var i = 0; i < variable.length; i++) {
//Lo ejecutamos como código de javaScrip
//para obtener el valor de dicha variable
		var value=eval(variable[i]);
		console.log(value);

//remplazamos el contenido conllave{x} por su valor correspondiente
		html_string=html_string.replace("{"+variable[i]+"}",value);
		console.log(html_string);

		}

		res.writeHead(200,{"Content-Type":"text/html"});
		res.write(html_string);
		res.end();

});

}).listen(8080);
