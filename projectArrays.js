/* Instrucciones
Crea un script que genere todas las combinaciones posibles de nombres de dominio de una lista de pronombres,
adjetivos y sustantivos, por ejemplo:

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

Debe generar algo como:

thegreatjogger.com
thegreatracoon.com
ourgreatjogger.com
ourgreatracoon.com
thebigjogger.com
thebigracoon.com
ourbigjogger.com
ourbigracoon.com
*/

// Bucle for

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon', 'runner'];
let extension = ['.com', '.net','.org'];

function generateDomain (pronoun, adj, noun, extension){

    for (let i = 0; i < pronoun.length; i++) {
        for (let j = 0; j < adj.length; j++){
            for (let k = 0; k < noun.length; k++){
                for (let l = 0; l < extension.length; l++) {
                    console.log(`${pronoun[i]}${adj[j]}${noun[k]}${extension[l]}`);
                }
            }
        }

    }

}

generateDomain(pronoun, adj, noun, extension);
