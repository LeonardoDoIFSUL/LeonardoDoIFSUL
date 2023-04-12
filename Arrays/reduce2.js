// REDUCE REDUZ TODOS OS INDICES DE UM ARRAY, SOMANDO/CONCATENANDO OS VALORES EM 1 INDICE

const alunos = [
    {nome:"iasmyn",nota:7.5,bolsista:true},
    {nome:"Lariassa",nota:5,bolsista:false},
    {nome:"João",nota:8.5,bolsista:true},
    {nome:"Joana",nota:9.0,bolsista:false}
]

//Todos são bolsistas?
const todosBolsistas = (resultado,bolsista) => resultado && bolsista
const todos = alunos.map(e => e.bolsista).reduce(todosBolsistas)
console.log(todos)

//Algum é bolsista? 
const algumBolsista = (resultado,bolsista) => resultado || bolsista 
const bolsistas = alunos.map(e => e.bolsista).reduce(algumBolsista)
console.log(bolsistas)
