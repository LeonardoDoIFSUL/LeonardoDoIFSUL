function criarProduto(nome, valor, validade){
    return{
        nome,
        valor,
        validade,
        desconto: 0.1
    }
}

console.log(criarProduto("Notebook", 3950.00, "sem validade"))
console.log(criarProduto("Iphone", 4950.00, "2 anos e meio"))