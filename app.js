// Empezamos yehaaa!
console.log("Hola Mundo");

// variables numericas

let numero1 = 45;
let numero2 = 15;
let numero3 = 66;

// variables boleanas

let estado = true;

// variables string

let adress = "Cra 96A No 73 - 39 Alamos Norte";

console.log(numero1);

// Operaciones basicas munecura
/*
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let mod = numero1 % numero2;
console.log(suma);

console.log(`LA SUMA DE ${numero1} Y ${numero2} ES ${suma}`);
console.log(`LA RESTA DE ${numero1} Y ${numero2} ES ${resta}`);
console.log(`LA MULTIPLICACION DE ${numero1} Y ${numero2} ES ${multiplicacion}`);
console.log(`LA DIVISION DE ${numero1} Y ${numero2} ES ${division}`);
console.log(`LA DIVISION MODULO DE ${numero1} Y ${numero2} ES ${mod}`);
*/


// Ingreso de data por el usuario

//let nu1 = parseInt(prompt (("Ingrese el primer valor")));
//let nu2 = parseInt(prompt (("Ingrese el segundo valor")));
//let s = nu1 + nu2;

//console.log(`EL PRIMER VALOR ES ${nu1} Y EL SEGUNDO ES ${nu2}`);
//console.log(`LA SUMA ES ${s}`);


// Nueros aleatorios

//let alea = Math.floor(Math.random() * 50 ) + 1;
//console.log(alea);


/*
// Estructura if


let edad = 14;

if (edad >= 18){
    console.log("MAYOR DE EDAD");
}else{
    console.log("MENOR DE EDAD");
}
*/


//EJERCICIO 2 LA CALIFICACION Sept 10 
/*
let calificacion;

calificacion = parseFloat(prompt("ingrese su calificacion parserito"));

if(calificacion < 3.0){
    console.log("SE RAJO CHINO");
}else{
    console.log("PASO MANO");
}
*/

//EJERCICIO 3 LA CALIFICACION Sept 10
/*
let calificacion;

calificacion = parseFloat(prompt("ingrese su calificacion parserito"));

if(calificacion < 3.0){
    console.log("SE RAJO CHINO");
}else if(calificacion > 3.1 && calificacion <= 4.0){
    console.log("PASO MANO");
}else{
    console.log("USTED ES MUY BUENO");
}
    */

//QUE GENERACION ERES Sept 10

/*
let generacion;

generacion = parseFloat(prompt("EN QUE ANO NACIO PARCERITO?"));

if(generacion <= 1900){
    console.log("ERES DE LA GENERACION PERDIDA...");
}else if(generacion >= 1901 && generacion <= 1924) {
    console.log("ERES DE LA GENERACION GRANDIOSA...");
}else if(generacion >= 1925 && generacion <= 1945) {
    console.log("ERES DE LA GENERACION SILENCIOSA...");
}else if(generacion >= 1946 && generacion <= 1964) {
    console.log("ERES DE LA GENERACION BABYBOOMERS...");
}else if(generacion >= 1965 && generacion <= 1980) {
    console.log("ERES DE LA GENERACION X...");
}else if(generacion >= 1981 && generacion <= 1996) {
    console.log("ERES DE LA GENERACION Y...");
}else if(generacion >= 1997 && generacion <= 2012) {
    console.log("ERES DE LA GENERACION Z...");
}else if(generacion >= 2013 && generacion <= 2024) {
    console.log("ERES DE LA GENERACION ALPHA...");
}else{
    console.log("NO CORRESPONDE...");
}
    */



// Estructura Codifo Switch keys Sept 11
/*
let dia=2;

switch(dia){
    case 1: console.log("Imprimir lunes");
    break;

    case 2: console.log("Imprimir Martes");
    break;

    case 3: console.log("Imprimir Miercoles");
    break;

    case 4: console.log("Imprimir Miercoles");
    break;

    case 5: console.log("Imprimir Jueves");
    break;

    case 6: console.log("Imprimir Viernes");
    break;

    default: console.log("Dia no existe");

}
    */

// Prctica: Conversor de Divisas Dolar $4280 Euro $4728 Libra $5601

let dolar=4280;
let euro=4728;
let libra=5601;

cantidad = parseFloat(prompt("Ingrese el dinero disponible"));

totaldolar = cantidad / dolar;
console.log(totaldolar);

totaleuro = cantidad / euro;
console.log(totaleuro);

totallibra = cantidad / libra;
console.log(totallibra);


/*
switch(cantidad){

    case 1: totaldolar = cantidad * dolar;
    console.log(totaldolar);
    break

    case 2: totaleuro = cantidad * euro;
    consoles.log(totaleuro);
    break

    case 3: totallibra = cantidad * libra;
    console.log(totallibra);
    break;

}
    */






