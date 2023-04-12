const produtos = [
    {nome: 'Notebook', valor: 2960.00, fragil: true},
    {nome: 'Celular', valor: 3160.00, fragil: false},
    {nome: 'Ipad', valor: 4530.00, fragil: true}
]

console.log(produtos.filter(function(e){
    return false //Não retorna nada
}))

console.log(produtos.filter(function(e){
    return true //Retorna tudo
}))

const verificaCaro = function(e){
    if(e.valor < 3500)      
    return e
}
//Esta função retorno false ou true | Caso false ele não faz nada, caso true ele retorna o valor
const verificaFragil = (e) => e.fragil 
console.log(produtos.filter(verificaCaro).filter(verificaFragil))
