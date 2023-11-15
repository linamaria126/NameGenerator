// Crea una función llamada mergeTwoList que reciba un arreglo de numeros.
// Recorre el arreglo y separa los números pares e impares en diferentes arreglos

let listOfNumbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// // Your code here
// function mergeTwoList(arr){
//     let odd = [];
//     let even = [];
//     for (let index = 0; index < arr.length; index++) {
//         if(arr[index]%2 === 0){
//             even.push(arr[index]);
//         }
//         else{
//             odd.push(arr[index])
//         }
//     }
//     return odd.concat(even);
// }


// console.log(mergeTwoList(listOfNumbers));

function mergeTwoList(arr){
    let odd = [];
    let even = [];
    arr.forEach(function(item){
        if(item%2 === 0){
            even.push(item);
        }
        else{
            odd.push(item)
        }
        
    });
    return odd.concat(even);
}

console.log(mergeTwoList(listOfNumbers));