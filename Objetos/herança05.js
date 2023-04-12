//Objetct PreventExtensions | Altera os valores, exclui parametros mas não cria parametros
const Produto = Object.preventExtensions({
    nome: "Qualquer", preco: 1.99, tag: "promoção"
})
console.log("Extensivel:", Object.preventExtensions(Produto))

Produto.nome = "Borracha"
Produto.descricao = "Borracha Escolar branca"
delete Produto.tag
console.log(Produto)

//Object Seal | Não adiciona parametros nem esclui os existentes, mas pode alterar valores
const Pessoa = { nome: "larissa", idade:35}
Object.seal(Pessoa)
console.log("Selado:", Object.isSealed(Pessoa))
Pessoa.sobrenome = "Silva"
Pessoa.idade = 29 //Alterou para 29
delete Pessoa.nome
console.log(Pessoa)

//Object Freeze | Seal + Valores constantes

const Carro = { nome: "ferrari", velocidade: 200}
Object.freeze(Carro) //Tem que ser colocado logo abaixo do objeto
Carro.nome = "BMW"
Carro.valor = 200000
delete Carro.velocidade
console.log(Carro)