const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)

pilotos.pop()//Exlui o ultimo elemento do array
pilotos.push('Verstappen') //Adiciona no ultimo elemento
pilotos.shift() //Remove o Primeiro elemento do array
pilotos.unshift('Hemmilton') //Adiciona no primeiro indice 
console.log(pilotos)

//Splice pode adicionar e remover elementos em apenas um comando
//1 - Indice, 2-Quantos remover, 3 pra frente- Adiciona os valores

//Adiciona dois a partir do indice 2 e não remove ninguem 
pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos)

//Remove 1 elemento a partir do indice 3, no caso o proprio indice
pilostos.splice(3,1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)//Cria um novo array com todos à partir do indice 2
console.log(algunsPilotos1)

//Cria um novo array com os indices a partir do [1] até o indice [3] | SEMPRE VOLTA 1 INDICE
const algunsPilotos2 = pilostos.slice(1,4) 
console.log(algunsPilotos1)
