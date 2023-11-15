const mergeArrays = (firstArray, secondArray) =>{
    //crear un array vacío
    let newArray = [];
    //Recorrer  y agregar el primer array a newArray
    firstArray.forEach((item) => newArray.push(item));
    //Recorrer  y agregar el segundo array a newArray
    secondArray.forEach((item) => newArray.push(item));
        
    return newArray;
}

let chunkOne = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
let chunkTwo = [ 'Lucas', 'Jake', 'Scott', 'Amy', 'Molly', 'Hannah', 'Lucas' ];

console.log(mergeArrays(chunkOne, chunkTwo));