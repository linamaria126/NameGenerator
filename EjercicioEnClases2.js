/**
 * Crea una funcion que reciba un arreglo
 * El arreglo va a ser de numeros [0,1,2,3,4,5,5,5,5]
 * Los numeros se pueden repetir tantas veces como sea
 * 
 * La funcion debe retornar un arreglo con la misma cantidad de elementos
 * De forma que sea incremental. 
 * Por ejemplo si el numero siguiente es mayor que 
 * el actual modificalo por el actual
 * 
 * Por ejemplo:
 * Si recibes: [0, 1, 2, 1, 2, 2, 2]
 * Deberias retornar [0, 1, 2, 2, 2, 2, 2]
 * 
 * Si recibes: [0, 0, 1, 2, 2, 3, 2, 3]
* Si recibes: [0, 0, 1, 2, 2, 3, 2, 3]
 * Debes retornar [0, 0, 1, 2, 2, 3, 3, 3]
 * 
 * [0,1,2,3,1]
 * [0,1,2,3,3]
 */

function incrementalArray(arrayNumber){
    let element = [];
    for (let i = 0; i < arrayNumber.length; i++) {
        if(arrayNumber[0]){
            element.push(arrayNumber[0]);
        }else if(arrayNumber[i] < arrayNumber[i-1]){
            arrayNumber[i] = arrayNumber[i-1]
            element.push(arrayNumber[i]);
        }else{
            element.push(arrayNumber[i]);
        }
        }
        return element;
    }


console.log(incrementalArray([0, 0, 1, 2, 2, 3, 2, 3]))