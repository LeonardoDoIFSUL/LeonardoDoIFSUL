//Node sempre deixa o valor alocado do require em cache, ou seja, esse valor pode ser acessado por outra variavel com mesmo require

//Neste exemplo o module.exports retorna um objeto
const cacheA = require('./instanciaUnica')
const cacheB = require('./instanciaUnica')

//module.exports deste require, é uma ARROW FUNCTION que esta retornando um objeto, por isso precisa ser chamada
const cacheC = require('./instanciaNova')()  
const cacheD = require('./instanciaNova')()  

cacheA.inc()
cacheA;inc()
console.log(cacheB.valor)

cacheC.inc()
cacheC.inc()
console.log(cacheD.valor)