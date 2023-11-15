/*Crea un objeto donde las letras son las propiedades y los valores son el número de veces 
que esa letra se repite en toda la cadena.
*/

function contarLetras(string) {
    // Crear un objeto vacío para guardar las letras y sus repeticiones
    let contador = {};
  
    // Recorrer el string con un bucle for
    for (let i = 0; i < string.length; i++) {
      // Obtener la letra actual en minúscula
      let letra = string[i].toLowerCase();

      //Si hay un espacio 
      if(letra == " ") {
        continue;
      }
      // Si la letra ya existe en el objeto contador, incrementar su valor en uno
      else if(contador[letra] == undefined) {
        contador[letra] = 1;
      }
      // Si la letra no existe en el objeto contador, asignarle el valor uno
      else {
        contador[letra]++;
      }
    }
  
    // Devolver el objeto contador con el resultado
    return contador;
  }

let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"

console.log(contarLetras(par));