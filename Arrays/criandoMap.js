Array.prototype.map2 = function(callback){
    const novoArray = []
    for(let i=0;i<this.length;i++){
        novoArray[i] = callback(this[i],i,this)
    } 
    return novoArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": "19.99"}',
    '{"nome": "Lapiz", "preco": "7.60"}',
    '{"nome": "Caneta", "preco": "5.90"}'
]

const valida = carrinho.map2(function(e){
    let valores = JSON.parse(e)
    return valores.preco
})

console.log(valida)