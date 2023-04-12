//Concatena dois arrays, objetos, parametros que posso adicionar

const filhas = ['Lina','Majoras']
const filhos = ['Wesker','Krauser']
const todos = filhas.concat(filhos,'Madalena') //Adicionei um valor além do array

console.log(todos, filhas, filhos)

//Concatenou a primeira camada de todos os arrays em 1
console.log([].concat([1,2],[3,4],[[6,7]])) 