console.log("Sesión JS02");


/* 
Funciones declaradas / funciones definidas
(function declaration / function statement)


Una caracteristica de las funciones declaradas es que tiene hoisting (elevación).


*/
console.log("El resultado de 5 * 10 = " + multiplica(5, 10)) ;

function multiplica (a,b) {
    return a * b;
}

/* 
Funciones expresadas

Las funciones expresadas (function expressions) son funciones
que son declaradas dentro de la asignación de una variable.

Estas funciones pueden ser anónimas (no tienen nombre).
Las funciones expresadas no tienen hoisting

*/

/**
 * Suma dos valores
 * @param {number} a primer operador para sumar
 * @param {number} b segundo operdor para sumar
 * @returns resultado de a + b;
 */
const suma = function (a, b) { 
    return a + b
};

console.log("La sumatoria de 4 + 6 = " + suma(4, 6) ) ;


/* 
Funciones autoinvocadas 

Las funciones autoinvocadas (selft-invoking functions)
Son funciones que se ejecutan en su definición
Pueden ser anónimas.
*/

( function saludo() {
    console.log("Hola, me estoy autoinvocando");
} )();

/* 
Funciones Flecha

Una función flecha (arrow function) son similares a las funciones
expresadas pero no requiere la palabra
function. Además, si sólo tiene una instucción y es el retorno,
no requiere la instrucción return y llaves {}

Las funciones flechas tampoco tienen hoisting.
*/

/* const restaExpresada = function (a,b) {
    return a - b;
} */

const resta = (a, b) => a - b;

console.log("La resta de 20 - 2 = " + resta(20, 2) );

const exponente = ( a, b) => {
    const result = a ** b;
    return result;
}

console.log("El numero 4 ^ 3 = " + exponente(4,3));

const exponenteAlCuadrado =  a  => a ** 2;
console.log("El numero 4 ^ 2 = " + exponenteAlCuadrado(4));

/* 
Funciones con parámetros inicializados.

*/

function divide( a = 3, b = 1) {
    return a / b;
}

console.log("La división de 3/1  = " + divide(5, 2));

/*
Rest Parameters
El parámetro rest nos permite representar una serie de valores 
indefinidos en los argumentos como un array.

El parámetro rst siempre debe ir al final de todos los parámetros

*/

 function sumatoriaIndefinida(a, b, ...restoDatos ) {
    let sumatoria = a + b;
    for(let i = 0; i < restoDatos.length; i++) {
        sumatoria += restoDatos[i]; //Sumatoria = sumatoria + restoDatos[i];
    }
    return sumatoria;
 }
 console.log("sumar varios numeros: " + sumatoriaIndefinida(2, 3, 5, 10, 11));

/* 
Función recursiva
función recursiva es una función que se llama así misma.

Factorial de 0 = 1;
factorial de 3 = 3 * 2 * 1;
factodial de 5 = 5 * 4 * 3 * 2 * 1;
*/

function factorialConCicloFor (a) {
    let total = 1;
    for(i = 1; i <= a; i++) {
        total *= i;
    }
    return total;
}

console.log(factorialConCicloFor(3))

function factorialConRecursion( a ) {
    if( a < 1) return 1;
    return a * factorialConRecursion( a - 1);
}


console.log("Factorial 3 = " + factorialConRecursion(3));
console.log("Factorial 5 = " + factorialConRecursion(5));