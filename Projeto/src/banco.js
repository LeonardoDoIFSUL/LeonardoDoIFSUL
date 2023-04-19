const sequence = {
    _id: 1,
    get id(){return this._id++}
}

const produto={}

function salvarProduto(produto){
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto //Criei um array contendo os Objetos "Produto"
}

function getProduto(id){
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}

function excluirProduto(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

//Enviando isso para fora deste modulo...
module.exports = (salvarProduto, getProduto, getProdutos, excluirProduto)