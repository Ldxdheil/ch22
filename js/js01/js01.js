

/* Son 7 datos primitivos de JavaScript
- String ("Hola Mundo")
- Number (1800.22)
 Los números se utilizan 64 bits para almacenarlo
 pero, solo se usan 53 bits para representar el numero
- BigInt (1800n)
    Convertir un dato númerico a BigInt
    let maxNumber = Number.MAX_SAFE_INTEGER;
    let bigIntVar = BigInt(maxNumber)
- Boolean ()
- Undefined 
- Null
- Symbol

Tipos de datos Object

- Object
- Array 

Funciones 
 */


let myObject = {clave: "valor", edad: 18, 5:5};
console.log(myObject.edad);
const propiedad = 'edad';
console.log( myObject[propiedad] );
console.log( myObject['5'] );

/* Conversiones de datos de sring a number */



