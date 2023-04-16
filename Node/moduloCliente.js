//Cliente sempre vai requerir um arquivo do servidor 

const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.ateLogo)
console.log(moduloA.bemVindo)
console.log(moduloA) //Aqui ele mostra o Objeto recebido do móduloA

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite)
console.log(moduloB) //Aqui ele mostra o Objeto recebido do móduloB