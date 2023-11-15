let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
domian ='.com'

let domianGenerator = () => {

    for (let i = 0; i <= pronoun.length; i++) {
        for ( let t = 0; t < adj.length; t++) {
            for (let u = 0; u < noun.length; u++) {
                console.log (pronoun[i] + adj[t] + noun[u] + domian);
            }
        }
    }
} 


     domianGenerator()
    // console.log(domianGenerator())