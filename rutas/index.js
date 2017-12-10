var express = require("express");
var app = express();
//console.log(app);
app.set("view engine","jade");

//verbos peticion Http => principales
// GET / POST /PUT /PATCH  / DELETE  --/OPTIONS /HEADERS
// ESTO CONFORMA LAS REST
app.get("/",function(req,res){
	res.render("index");
});

app.post("/",function(req,res){
	res.render("form");
});

app.get("/algo",function(req,res){
	res.render("form");
});
app.get("/:nombre",function(req,res){
	console.log(req.params.nombre);
	res.render("cualquiera",{nombre:req.params.nombre});
});


app.listen(8080);
