var http=require("http"),
fs=require("fs");
//var
http.createServer(function(req,res){
fs.readFile("./index.html",function(err,html){

		//res.writeHead(200,{"Content-Type":"text/html"});
		res.writeHead(200,{"Content-Type":"aplication/json"});
		//res.write(html);
		res.write(JSON.stringify({nombre:"Darwin",usuarionombre:"dacurso"}));
		res.end();

});

}).listen(8080);
