Array.prototype.reduce2 = function(callback, valorInicial){
    const indiceInicial = valorInicial ? 0:valorInicial //Pode colocar 1 que funciona | true
    let acumulador = valorInicial || this[0]

    for(let i=indiceInicial;i<this.length;i++){
        acumulador = callback(acumulador,this[i],i,this)
    }
    return acumulador
}

const alunos = [
    {nome:"iasmyn",nota:7.5,bolsista:true},
    {nome:"Lariassa",nota:5,bolsista:false},
    {nome:"João",nota:8.5,bolsista:true},
    {nome:"Joana",nota:9.0,bolsista:false}
]

//Todos são bolsistas?
const todosBolsistas = (resultado,bolsista) => resultado && bolsista
const todos = alunos.map(e => e.bolsista).reduce2(todosBolsistas)
console.log(todos)

//Algum é bolsista? 
const algumBolsista = (resultado,bolsista) => resultado || bolsista 
const bolsistas = alunos.map(e => e.bolsista).reduce2(algumBolsista)
console.log(bolsistas)