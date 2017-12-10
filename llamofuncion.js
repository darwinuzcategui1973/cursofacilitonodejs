
/*
function llamofuncion(){
    console.log("llamo a funcion en otro");

}
caso uno

*/
/*
module.exports.llamofuncion=function(){
    console.log("llamo a funcion en otro");

};
caso dos
*/
let localm = 1515;


module.exports= {
    mensaje:localm,
    llamofuncion:function(){

        console.log("llamo de otra forma la funcion");
    }

}