var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log("Ascending sort:",fruits);// Sorts the elements of fruits

fruits.reverse();
console.log("Reverse sort:",fruits);// Reverses the order of the elements

//the same as before, but passing a sorting function
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log("Using comparison function:",points);

//shuffle an array of numbers 
var points = [40, 100, 1, 5, 25, 10];
//will return negative ~50% of the time and positive the other ~50% of the time
points.sort(function(a, b){return 0.5 - Math.random()});
console.log("Shuffle:",points);

//sorting an object
var cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}];
    cars.sort(function(a, b){return a.year - b.year});
    console.log("Sort objects:",cars);