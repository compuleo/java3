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

    // opciones realizar un calculo matematico

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
    /*
    let num1 = Math.floor(Math.random() * 50) + 1;
    let num2; //numero que se le pregunta al cristiano...
    
    for(let i = 1; i <= 3; i++){ //Aqui son solo 3 intentos...

    while(true){ //Aca esta la adivinanza...


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
    */

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
    

    //  Areas de las figuras Sep 19 
    /*
    let ac, acu, at;
    let r, lado, b , h;
    const pi = 3.1416;
    let opcion;

    opcion = parseInt(prompt(`1. Area Circulo \n 2. Area del Cuadrado \n 3. Area del Triangulo \n 4. Salir`));
    while(opcion != 4){
    switch(opcion){


    case 1: alert("Area del circulo");
    // A = pi * r*r
    r = parseFloat(prompt("Ingrese el valor del radio"));
    ac = pi * (r*r);
    alert(`El area del circulo es: ${ac}`);
    break;

    case 2: alert("Area del cuadrado");
    // A = lado * lado
    lado = parseFloat(prompt("Ingrese el valor del lado"));
    acu = (lado*lado);
    alert(`El area del cuadrado es: ${acu}`);
    break;

    case 3: alert("Area del triangulo");
    // A = B*H/2
    b = parseFloat(prompt("Ingrese el valor de la base"));
    h = parseFloat(prompt("Ingrese el valor de la altura"));
    at = (b*h)/2;
    alert(`El area del triangulo es: ${at}`);
    break;

    case 4:
    alert("SALIENDO.....");
    //estado = false;
    break;

    default: 
    alert("Opcion no valida");

    }

    opcion = parseInt(prompt(`1. Area Circulo \n 2. Area del Cuadrado \n 3. Area del Triangulo \n 4. Salir`));

}
    */


    //  conversor de temperaturas

    //do while ///// falta resolverlo
    /*
    let c; // celsius
    let f; //fharenheit
    let k; //kelvin

    let ck, fk, at, kf, kc, fc;

    let opcion;
    let estado = true;

    do{

    opcion = parseInt(prompt(`1. kelvin a celsius \n 2. kelvin a fharengheit \n 3. fharenheit a celsius \n 4. fharenheit a kelvin \n 5. celsius a kelvin \n 6. celsius a fharenheit \n 7 salir del conversor `));
    
    switch(opcion){


    case 1: alert("kelvin a celsius");
    
    k = parseFloat(prompt("Ingrese el valor de la temperatura en kelvin"));
    ck = k-273.15;  
    alert(`la temperatura en celsius es: ${ck}`);
    break;

    case 2: alert("kelvin a fharengheit");
    k = parseFloat(prompt("Ingrese el valor de la temperatura en kelvin"));
    fk = 9*(k-273.15)/5+32;
    alert(`la temperatura en fharengheit es: ${fk}`);
    break;

    case 3: alert("fharenheit a celsius");
    f = parseFloat(prompt("Ingrese el valor de la temperatura en fharenheit"));
    at = (f*h)/2;
    alert(`la temperatura en celsius es: ${fk}`);
    break;

    case 4: alert("fharenheit a kelvin");
    f = parseFloat(prompt("Ingrese el valor de la temperatura en fharenheit"));
    kf = 5(f-32)/9+273;
    alert(`la temperatura en kelvin es: ${kf}`);
    break;

    case 5: alert("celsius a kelvin");
    c = parseFloat(prompt("Ingrese el valor de la temperatura en celsius"));
    kc = c+273.15;
    alert(`la temperatura en kelvin es: ${kc}`);
    break;

    case 6: alert("celsius a fharenheit");
    c = parseFloat(prompt("Ingrese el valor de la temperatura en celsius"));
    fc = 9*c/5+32;
    alert(`la temperatura en fharenheit es: ${fc}`);

    case 7:
        break;


    default: 
    alert("Opcion no valida");

    }

    }while(estado);

    */

    // Sept 20
    /*
    // Solicitar un número entero al usuario / este ejercicio esta bien...
    let num = parseInt(prompt("Ingrese un número entero para y dibuje el triángulo:"));
    // la variable num es el numero ingresado por el usuario
    // Validar si el número ingresado es positivo
    if (num > 0) {
    // Bucle para dibujar el triángulo, el if me dice que el numero sea positivo
    for (let i = 1; i <= num; i++) {
    console.log('*'.repeat(i)); // Imprimir i asteriscos en la línea
    }
    } else {
    console.log("Por favor no se haga el que no entiende..., ingrese un número pero que sea entero positivo.");
    }
    */


        //Sept 23 

        //Crea un script que pida al usuario una contraseña. 
        // Si coincide con la clave definida en el script le devolverá el siguiente 
        //mensaje "Acceso concedido" de lo contrario le devolverá el mensaje "Acceso Denegado". 
        //Si falla tres veces se visualizará el mensaje "Alerta, intruso tratando de acceder…"

        /*
        let clave = null;
        let intento = 0;
        let passw = "Talento";
        while (clave != passw && intento < 3){
        clave = prompt("Teclee su clave");
        if (clave == passw){
         alert("Acceso concedido..");
        }
        else{
         alert("Acceso denegado..");
        intento++;
        }
        }
        if (intento == 3){
        alert("Alerta Intruso tratando de acceder");
        }
        */

        //Implementa un script haciendo uso de “do..while()” para crear una cadena que
        //contenga letras repetidas. Las letras se digitan por teclado y sólo podrán ser la
        //X o la Z, después de elegir las letras se le ingresa el número de repeticiones que
        //deberá estar entre 1 y 15.

        //Ejemplo: Si elijo X y luego digito 10 se mostrará XXXXXXXXXX. Si digito
        //una letra diferente me volverá a pedir la letra, y si tecleo 20 me
        //volverá a pedir el número

        /*
        let letra=null, veces=0, cad="";
        do{
        letra = prompt("¿Qué letra desea X o la Z?");
        }while (letra != 'X' && letra != "Z");
        do{
        veces = parseInt(prompt("¿Cuantas repeticiones (1-15)?"));
        }while (veces <1 || veces > 15)
        do{
        cad+=letra;
        veces--;
        }while (veces>0);
        alert(cad);
        */

    // Solicitar la cantidad a convertir y generar funciones
     // Ejercicio de cambio de divisa Sept 23
     /*
    let cantidad = parseInt(prompt("Que cantidad de dinero quiere cambiar"));
    let opcion = prompt("Seleccione la moneda a convertir: \n1. Euro (EUR) \n2. Dolar (USD) \n3. Libra esterlina (GBP)");
    const TASA_DOLAR = 4280;
    const TASA_EURO = 5728;
    const TASA_LIBRA = 4728;

    // Solicitar la cantidad a convertir 
    
    switch(opcion){
        case 1:
        console.log(euros);
        alert(`EL VALOR INICIAL ES: ${(cantidad)} y la conversion es ${euros(cantidad)}`)
        break;

        case 2:
        console.log(dolares);
        alert(`EL VALOR INICIAL ES: ${(cantidad)} y la conversion es ${dolares(cantidad)}`)
        break;

        case 3:
        console.log(libras);
        alert(`EL VALOR INICIAL ES: ${(cantidad)} y la conversion es ${libras(cantidad)}`)
        break;

        default:
        alert("opcion invalida");

        }

        // Generar la funcion por cada caso

        function dolares(cantidad) {
        return cantidad / TASA_DOLAR;
        }

        function euros(cantidad){
        return cantidad / TASA_EURO;
        }

        function libras(cantidad){
        return cantidad / TASA_LIBRA;
        }
        */

        //Contrasena con el teacher Fabian
        //Ciclo de pregunta e intentos
        /*
        function login(){
        while(intento < 3){
            clave = prompt("Digite su clave de acceso");
            if(clave == passw){
            alert("paso chino!...");
            break;
        }else{
            //Sino paila...
            alert("paila pelado");
            intento ++ ;
        }
        }

            //Sino se cumplen la condiciones...
        if(intento == 3){
            alert("Hoy no se puede mano...");
        }
        }

            //Variables
            let clave = null;
            let passw = "Talento";
            let intento = 0;
            login();
        */

        // SEPT 24
        // ARREGLOS
        /*

        let estudiantes = ["Laura", "Julian", "Andres", "Oscar", "Paola"];
        console.log(estudiantes)

        // Añadir un elemento al final 
        console.log(estudiantes.push("Ricardo"));
        console.log(estudiantes)

        // Agrego elementos al inicio
        console.log(estudiantes.unshift("Esmeralda"));
        console.log(estudiantes)

        // Añadir elementos en alguna posicion
        console.log(estudiantes.splice(2, 1));
        console.log(estudiantes)

        // Eliminar ultimo
        console.log(estudiantes.pop());
        console.log(estudiantes)

        // Eliminar el primer elemento
        console.log(estudiantes.shift());
        console.log(estudiantes)

        // Posicion de un elemento
        console.log(estudiantes.indexOf("Andres"));
        console.log(estudiantes)

        // Recorrer el arreglos
        // op 1
        estudiantes.forEach((est) =>{
        console.log(est);
        });
        */

        //sept 25
        /*
        let vector = [];
        // Recorrer para llenarlo

        //posiciones del arreglo
        for(let i = 0; i < 5; i++){

            vector.push(i + 1);

        }
        //mostrar el arreglo
        for(let i = 0; i < 5 ; i++){

            console.log(vector[i]);

        }
        */

        //Sumar los numeros del arreglo
        /*
        let numeros = [12,23,18,16,19];
        let suma = 0;

        for(let i = 0; i < numeros.length; i++){

            suma += numeros[i];

        }

        console.log(`LA SUMA ES: ${suma}`);
        */

        //
        /*
        let numeros = [12, 23, 18, 16, 19];
        */
        /*
        let sumaimpar = 0;
        let sumapar = 0;

        for(let i = 0; i < numeros.length; i++) {

        if(numeros[i] % 2 === 0) {
        sumapar += numeros[i]; // Si es par, suma a 'sumapar'
        } else {
        sumaimpar += numeros[i]; // Si es impar, suma a 'sumaimpar'
        }
        }

        console.log(`LA SUMA IMPAR ES: ${sumaimpar}`);
        console.log(`LA SUMA PAR ES: ${sumapar}`);

        //Cual es el mayor numero

        let mayorNumero = Math.max(...numeros);
        console.log(`El número mayor es: ${mayorNumero}`);

        //Cual es el menor numero

        let menorNumero = Math.min(...numeros);
        console.log(`El número menor es: ${menorNumero}`);

        // Solucion esperando la logica
        // Crear un arreglo con numeros aleatorio
        */
        /*
        let numeroMayor = numeros[0];
        let numeroMenor = numeros[0];


        for(let i = 0; i < numeros.length; i++){
            if (numeros[i] > numeroMayor)}{
                numeroMayor = numeros[i];
            } else if (numeros[i] < numeroMenor){
                numeroMenor = numeros[i];
            }
        }

        console.log("El numero mayor es:", numeroMayor);
        console.log("El numero menor es:", numeroMenor);
        */

        /*
        
        let tamanio = parseInt(prompt("Ingrese la cantidad de estudiantes"));
        let calificaciones = new Array(tamanio);
        let sumar = 0;
        //let cont = 0;

        for (let i = 0; i < calificaciones.length; i++){

        calificaciones[i] = parseFloat(prompt("Ingrese las notas"));

        }

        console.log(`LA SUMA DE LAS CALIFICACIONES ES ${sumar}`);
        console.log(`EL PROMEDIO DE LAS CALIFICACIONES ES ${sumar/tamanio}`);

        for(let i = 0; i < calificaciones.length; i++){
        // cont++;
        console.log(`Calificacion ${i+1} : ${calificaciones[i]}`);
        }

        */

    //SEPT 27 REPASO

    //El Director Comercial de un Supermercado de la ciudad le ha solicitado
    //desarrollar un código en JavaScript para los puntos de caja del Super. La
    //funcionalidad del Script es imprimir cada uno de los productos que el
    //cajero ira facturando en caja, su precio y calcular el total a pagar.
    //Desarrolla el código con las siguientes características:
    //-Que tenga una función caja() que solicite al usuario nombre y precio de cada
    // producto.
    //-Una variable total que vaya sumando el precio de los artículos
    //Una función adicional llamada imprimaProducto(prod, prec, tot_art) que reciba como
    //parámetros el nombre del producto, precio de cada producto, total de artículos para
    //imprimirlos o mostrar por consola.
    //-Que le pregunte al usuario si desea seguir facturando más artículos. Si no desea,
    //el programa debe detenerse y mostrar los productos facturados y total de la factura.
    //-Si no hay más artículos, que imprima el total de la compra realizada.
    //-Al finalizar el desarrollo de tu código, puedes simplement
    //Al finalizar el desarrollo de tu código, puedes simplemente llamar a la función
    //caja() para probar la funcionalidad del codigo.
    //zpu-rkxy-ozp


    //inicial  variables y arreglos
    /*
    function imprimaProducto(prod, preci, tot_art){
        //mostrar los que compro -nombre -precio y -total
     for(let i=0; i < tot_art; i++){
        console.log(`Producto ${prod[i]} : Precio: ${prec[i]}`)
     }
     

    let productos = new Array(10);
    let precios = new Array(10);
    let cant = 0;

    function caja(){
        let total_fact = 0;

        // Solicitar el nombre del producto y su precio
        for(let i=0; i<productos.length; i++){
            //Pedir productos
            let nombre = prompt("Ingrese nombre del producto...")
            let precio = parseInt(prompt("Ingrese el precio del producto..."))

            productos[i] = nombre;
            precios[i] = precio;
            cant++;

            //Sumar los precios de los productos
            total_fact += precio;

            //Preguntar al usuario si desea continuar
            masArticulos = confirm("Desea seguir agragando mas articulos....")

            if(masArticulos ==false){
                imprimaProducto(productos, precios, cant);
                break;
            }

            
        }

        

        }
        console.log(`Total a pagar: ${total_fact}`);
        
        }
        */

        //objetos
        /*
        class Persona{

            constructor(nombre, edad){
        
                this._nombre = nombre;
                this._edad = edad;
        
            }
        
        
            get nombre(){
                return this._nombre;
            }
        
            set nombre(nombre){
                this._nombre = nombre;
            }
        
            get edad(){
                return this._edad;
            }
        
            set edad(edad){
                this._edad = edad;
            }
        
        
            saludar(){
                console.log(Hola soy ${this._nombre} Y TENGO ${this._edad} años);
            }
        
        
        
        
        }
        
        const per1  = new Persona("Juan", 25);
        
        per1.saludar();
        
        const per2 = new Persona("Andres", 28);
        
        
        per1.nombre = "Lorena";
        
        
        per2.edad = 45;
        
        
        per1.saludar();
        
        per2.saludar();
        */

        //OCT 1
        /*
        class Libro{

            constructor(titulo, autor, paginas){
        
                this._titulo = titulo;
                this._autor = autor;
                this._paginas = paginas;
        
            }
        
        
            get titulo(){
                return this._titulo;
            }
        
            set titulo(titulo){
                this._titulo = titulo;
            }
        
            get autor(){
                return this._autor;
            }
        
            set autor(autor){
                this._autor = autor;
            }
        
            get paginas(){
                return this._paginas;
            }
        set paginas(paginas){
                this._paginas = paginas;
            }
        
        
            mostarInfo(){
        
                console.log(`El titulo del libro es: ${this._titulo} el autor es: ${this._autor} y tiene ${this._paginas} Paginas`);
        
            }
        
        
        }
        
        
        const l1 = new Libro("El relato de un naufrado", "Pepito", "230");
        const l2 = new Libro("EL principito", "Jorge", "180");
        const l3 = new Libro("EL Programador", "Lucia", "430");
        const l4 = new Libro("Cien Anos de Soledad", "1200");
        
        console.log(l1.titulo)
        console.log(l2.titulo)
        console.log(l3.titulo)
        console.log(l4.titulo)

        l1.autor = "Carlos";
        l2.autor = "Pablo";
        l3.autor = "Ana";
        l4.autor = "Gabriel Garcia Marquez";
        
        l1.mostarInfo()
        l2.mostarInfo()
        l3.mostarInfo()
        */

        //Produtos
        class Producto{

            constructor(nombre,precio,cantidad){
                this._nombre = nombre;
                this._precio = precio;
                this._cantidad = cantidad
            }
        
        
            get nombre(){
                return this._nombre;
            }
        
            set nombre(nombre){
                this._nombre = nombre;
            }
        
            get precio(){
                return this._precio;
            }
        
            set precio(precio){
                this._precio = precio;
            }
        
            get cantidad(){
                return this._cantidad;
            }
        
            set cantidad(cantidad){
                this._cantid
        }
        
        
            mostrarNombreProducto(){
                console.log(`El nombre del producto es: ${this._nombre}, el precio es: ${this._precio} y la cantidad es: ${this._cantidad}`);
            }
        
        
            valorTotal(){
                return this._precio * this._cantidad;
            }
        modificarCantidad(nuevoCantidad){
        
                this._cantidad = nuevoCantidad;
        
                console.log(`La nueva cantidad es: ${this._cantidad}`)
        
            }
        
        
        }
        
        const prod1 = new Producto("Mouse", 45000, 5);
        const prod2 = new Producto("Monitor", 1450000, 3);
        
        prod1.mostrarNombreProducto();
        prod2.mostrarNombreProducto();
        zpu-rkxy-ozp





    








