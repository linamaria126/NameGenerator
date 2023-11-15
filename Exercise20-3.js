/* Instrucciones:
Usa el método map() con la función prepender para crear un nuevo arreglo que se vea así:
[   'My name is: Alice',
    'My name is: Bob',
    'My name is: Marry',
    'My name is: Joe',
    'My name is: Hilary',
    'My name is: Stevia',
    'My name is: Dylan' ]
*/

let names = ['Alice', 'Bob', 'Marry', 'Joe', 'Hilary', 'Stevia', 'Dylan'];

let prepender = function(name) {
	return 'My name is: '+name;
};

// Your code here

let newArray = names.map(prepender);
console.log(newArray);