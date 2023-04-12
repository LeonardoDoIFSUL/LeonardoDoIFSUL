const carrinho = [
    '{ "nome": "Borracha", "preco": "19.99"}',
    '{"nome": "Lapiz", "preco": "7.60"}',
    '{"nome": "Caneta", "preco": "5.90"}'
]

const valida = carrinho.map(function(e){
    let valores = JSON.parse(e)
    return valores.preco
})

console.log(valida)