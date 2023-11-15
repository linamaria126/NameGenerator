// string termina con ?
/**
 * Crear una funcion que reciba dos parametros:
 * parametro a: una palabra o un string;
 * parametro b: unas letras;
 * 
 * La funcion debe verificar si el parametro a
 * termina con las letras del parametro b
 * 
 * ejemplo:
 * 
 * funcion("fruta", "ta"); // Retorna true
 * funcion("abc", "dc"); // Retorna false
 * funcion("carro", "rro"); // true;
 */



function ultimasLetras(palabra,frag){
    frag=frag.toLowerCase();
    let l=frag.length;
    palabra=palabra.toLowerCase();
    if(palabra.substring((palabra.length-l),palabra.length)===frag){
        return true;
    }
    return false;
}

console.log(ultimasLetras("Hola","OLA"));