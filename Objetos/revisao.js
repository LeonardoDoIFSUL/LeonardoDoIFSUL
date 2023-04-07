const produto = new Object
produto.nome = "Cadeira"
produto["marca do produto"] = "Generica"
produto.preco = 20
console.log(produto)

delete produto.preco
delete produto["marca do produto"]
console.log(produto)

const carro = { //Objeto
    modelo: "A4",
    valor: 89000,
    proprietario: { //Obj dentro de Obj
        nome: 'Raul',
        idade: 30,
        endereco: {
            Rua: 'Av. dos Açores',
            logradouro: 555
        }
    },
    condutores:[{ //Array em Obj
        nome: 'Leonardo',
        idade: 19
    },{
        nome: 'Laila',
        idade: 23
    }],
    calculoValorSeguro: function(valor,temp){
        let calculo = valor * temp
        return calculo
    }
}
console.log(carro)

carro.proprietario.endereco.logradouro = 1000 //Acessando este parametro e definindo um novo valor
carro['proprietario']['endereco']['Rua'] = "Av. Coisa qualquer"
console.log(carro.proprietario.endereco)

console.log(carro.euNaoExisto) // Aqui retorno undefined, mas não dá erro
console.log(carro.euNaoExisto.aiDeuRuim) //Aqui dá erro pois | pois euNaoExisto retorna undefined