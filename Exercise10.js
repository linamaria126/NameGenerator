/*
Instrucciones:
Compara el elemento. Si es 1, agrega el número en el arreglo return_array.
 Si es 0, agrega el string 'Yahoo' en el arreglo return_array (en lugar del número).
 Preguntar a profe la forma como la explica la solución oculta : return_array.push(item === 1 ? item : 'Yahoo')
*/


function ZerosToYahoos(arr) {
    let return_array = [];
    arr.forEach(function(item){
      
        if(item == 1){
            return_array.push(item);
        }
        else{
            return_array.push('Yahooo')
        }
    
               
    });
    return return_array;
}
let myArray = [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 1 ];
console.log(ZerosToYahoos(myArray))




