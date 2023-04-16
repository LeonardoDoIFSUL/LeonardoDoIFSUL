/*Por padrão acessamos os modulos presentes em NODE_MODULES
 por isso não precisamos colocar o caminho relativo */

 const saudacoes = require('saudacoes')

 console.log(saudacoes.ola)
 //Este é o module.exports, caso ele esteja presente, SOMENTE ELE será enviado
 console.log("Resultado quando module.exports não esta presente:",saudacoes.oi) 
 console.log(saudacoes.bomDia)