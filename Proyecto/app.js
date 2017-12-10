var express = require("express");

var app = express();

//app.use(express.static('public'));
//app.use(express.static('assets'));
//o de esta con un prefijo o nombre virtual
app.use("/estatico",express.static('public'));
app.use("/otrofijo",express.static('assets'));


app.set("view engine","jade");

app.get("/",function(req,res){
	res.render("index");
});

app.get("/login",function(req,res){
	res.render("login");
});
/*
app.get("/:nombre",function(req,res){
	console.log(req.params.nombre);
	res.render("cualquiera",{nombre:req.params.nombre});
});

*/
app.listen(8585);
