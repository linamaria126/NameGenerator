/* Instrucciones:
Utiliza el método map() para recorrer el arreglo de booleanos y crea un nuevo arreglo que contenga el string 'wiki' por cada 1 y 'woko' por cada 0 que tiene el arreglo dado.

Imprime el arreglo en la consola.

💡 Pistas:
Necesitas mapear todo el arreglo.

Dentro de tu función de mapeo, necesitas usar un condicional para verificar si el valor actual es 0 o 1.

Si el valor actual es 1, imprime el string 'wiki'.

Si el valor actual es 0, imprime el string 'woko'


*/

let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// Your code here

let newArray = theBools.map(function(item){
    if(item === 1){
        return'wiki';
    }
    else{
        return'woko';
    }
});


console.log(newArray);