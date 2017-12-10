var http=require("http"),
fs=require("fs");
//var
http.createServer(function(req,res){
fs.readFile("./index.html",function(err,html){

var i=0
while (true) {
	i++;
	res.write(html+" contador: "+i);
}
		res.write(html);
	//	res.end();

});

}).listen(8080);
