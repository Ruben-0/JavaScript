// Scope global
var nombre="Jairo";

function saludo(){
    console.log(`Dentro la funcion ${nombre}`);
    var apellido = "Gomez"
    return 0;
}
console.log(saludo());
console.log(`Fuera de la funcion ${nombre}`);


//Scope local
var nombre1 = "Leo";

function saludo(){
    var apellido1= "Gomez"
    console.log(`Dentro la funcion ${apellido1}`);
    return 0;
}

console.log(saludo());
console.log(`Fuera de la funcion ${apellido1}`);
