funcion render(html,variable){
	for (var i = 0; i < variables.length; i++) {
		//[nombre,apellido]
		var variable=variables[i];
		//console.log(variable);
		html_string=html_string.replace("{"+variables[i]+"}",parametros[variable]);
	};
	return html_string;

}
module.exports.render=render;
