// Empezamos yehaaa!
/*
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
*/

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
/*
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

    */


    // Ejercicio de cambio de divisa Sept 11
/*
    let cantidad = parseInt(prompt("Que cantidad de dinero quiere cambiar"));
    let opcion = prompt("Seleccione la moneda a convertir: \n1. Euro (EUR) \n2. Dolar (USD) \n3. Libra esterlina (GBP)");
    let TASA_DOLAR = 4280;
    let TASA_EURO = 5728;
    let TASA_LIBRA = 4728;
*/

    // Solicitar la cantidad a convertir 

    /*
    switch(opcion){
        case "1":
        let euros = cantidad / TASA_EURO;
        console.log(euros);
        break;

        case "2":
        let dolares = cantidad / TASA_DOLAR;
        console.log(dolares);
        break;

        case " 3":
        let libras = cantidad / TASA_LIBRA;
        console.log(libras);
        break;

        default:
        console.log("opcion invalidad");
        break;

    }
    */

    // Tabla de Multiplicar del 4 * 10  SEPT 12
    // ojo con las comillas
    /*
    let tabla = 4;

    for (let i = 1; i<=10; i++){
        console.log(`${tabla} * ${i} = ${tabla * i}`);
    }

    console.log("-----------------------------------------")
    */

    // Sept 13
    /*
    let num = parseInt (prompt("Entrar un numero entero"));
    let res = num%2;
    let par = res==0;
    console.log(" Es par?" + par);
    */

    //En el restaurante .....yo lo resolvi asi......
    /*
    let comida = prompt("Seleccione que tipo de comida desea: \n1. Pescado \n2. Carne \n3. Pollito \n4. Esalada");
    let pescado = 1;
    let carne = 2;
    let pollito = 3;
    let ensalada = 4;

    switch(comida){
        case "1":
        console.log("Desea vino blanco con su comida...")
        break;

        case "2":
            console.log("Desea vino tinto con su comida...")
            break;
        
        case "3":
            console.log("Desea papas fritas...")
            break;

        case "4":
            console.log("Desea agua...")
            break;
    }
        */

    //El teacher lo resolvio asi...
    /*
    let menu, bebida;
    switch (menu = prompt("Tipo de menu: Carne, Pescado, Ensalada").toLowerCase()){
        case 'carne':
            bebida = "Desea vino tinto...";
            break;
        case 'pescado':
            bebida = "Desea vino blanco...";
            break;
        case 'ensalada':
            bebida = "Quiere aguita...";
            break;
        default:
            bebida = "Elija carne pescado o ensalada";
    }
    alert(bebida);
    */

    // En que estacion estamos.....

    /*
    let mes, estacion;
    nMes = parseInt(prompt("Indica el numero del mes 1 al 12"));
    switch (nMes){
        case 12:
        case 1:
        case 2:
            estacion = "Invierno";
            break;
        case 3:
        case 4:
        case 5:
            estacion = "Primavera";
            break; 
        case 6:
        case 7:
        case 8:
            estacion = "Verano";
            break;
        case 9:
        case 10:
        case 11:
            estacion = "Otono";
            break;
        default:
            estacion = "desconocida";

    }
            */

    // Tablas desde el 1 hasta el 10
    /*
   console.log("Tabla de Multiplicar del 1 al 10");

   for (i=1; i<=10; i++){

        for(j=1; j<=10; j++){
            console.log(`${i} * ${j} = ${i * j}`);
        }
   }
   console.log("");
   */

    // sept 18
    /*
    let opcion;
    let estado = true;
    let coseno, seno, raiz, numero;

    // opciones realizar un calculo matematic

    // 1. Raiz
    // 2. Seno
    // 3. Coseno

    while(estado){

    opcion = (parseInt(prompt(`SELECCIONE UN OPCION \n 1. Raiz \n 2. Seno de N1 \n 3. Coseno N1 \n 4. Salir`)));

    switch(opcion){

    case 1: alert("Selecciono Raiz");

    numero = (parseFloat(prompt(`INGRESE EL NUMERO PARA CALCULAR LA RAIZ`)));
   
    raiz = Math.sqrt(numero);

    alert(`LA RAIZ DE ${numero} ES: ${raiz}`);

    break;

    case 2 : alert("Selecciono Seno N1");

    numero = (parseFloat(prompt(`INGRESE EL NUMERO PARA CALCULAR EL SENO`)));
   
    seno = Math.sin(numero);

    alert(`EL SENO DE ${numero} ES: ${seno}`);

    break;

    case 3 : alert("Selecciono Coseno N1");

    numero = (parseFloat(prompt(`INGRESE EL NUMERO PARA CALCULAR EL COSENO`)));
   
    coseno = Math.cos(numero);

    alert(`EL SENO DE ${numero} ES: ${coseno}`);

    break;

    case 4: alert("SALIENDO....")
    estado = falso;
    break;
    default:
    alert("LA OPCION NO EXISTE");

    }
    }
    */


    //Adivina divina

    let num1 = Math.floor(Math.random() * 50) + 1;
    let num2; //numero que se le pregunta al cristiano...
    
    for(let i = 1; i <= 3; i++){ //Aqui son solo 3 intentos...

    while(true){

        num2 = (parseFloat(prompt(`ADIVINA DIVINA....INGRESA UN NUMERO ENTRE EL 1 Y EL 50`)));
 
        num2 > num1;
        alert("no");
        break

        num2 < num1;
        alert("ni poquito");
        break

        num2 = num1;
        alert("acerto!")
        break

    }
    }

    // por chat gpt pero no entendi...
    /*

        // Genera un número aleatorio entre 1 y 50
        let numeroSecreto = Math.floor(Math.random() * 50) + 1;
        let intentos = 0;
    
        function adivinarNumero() {
        // Obtiene el número ingresado por el usuario
        let numeroUsuario = parseInt(prompt("Adivina un número entre 1 y 50:"));
      
        intentos++;
    
        // Verifica si el número ingresado es igual al número secreto
        if (numeroUsuario === numeroSecreto) {
        alert(`Adivinaste el número en ${intentos} intentos.`);
        } else if (numeroUsuario < numeroSecreto) {
        alert("El número es mayor. Inténtalo de nuevo.");
        adivinarNumero(); // Llama de nuevo a la función para seguir jugando
        } else if (numeroUsuario > numeroSecreto) {
        alert("El número es menor. Inténtalo de nuevo.");
        adivinarNumero(); // Llama de nuevo a la función para seguir jugando
        } else {
        alert("Por favor, introduce un número válido.");
        adivinarNumero(); // Vuelve a pedir un número
        }
        }
    
        // Inicia el juego
        adivinarNumero();
        */







