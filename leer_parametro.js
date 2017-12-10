function pasar(req){
	var arreglo_parametro=[],parametros={};
	if(req.url.indexOf("?")>0){
		var url_data=req.url.split("?");//parte la cadena desde
		var arreglo_parametro=url_data[1].split("&");
	//[nombre=uriel,data=algo]
	}
	for (var i = 0; i <arreglo_parametro.length; i++) {
	  	var parametro=arreglo_parametro[i];
     	// nombre=darwin
	  	var param_data=parametro.split("=");
	  	//[nombre,darwin]
	  	parametros[param_data[0]]=param_data[1];
	  	//{nombre:darwin}
  };

  return parametros;
}
module.exports.pasar=pasar;
