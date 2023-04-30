//Spread espalha parametros e valores de um objeto ou array para dentro de outro, como "herança" mas não tem nada a ver com isso

const funcionarios = {
    nome: "Maria",
    idade: 18
}

//Aqui no clone, ele vai espalhar os atributos do objeto funcionario
const clone = {
    ativo: true,
    ...funcionarios
}
console.log(clone)


//Usando array
const contagem = [1,2,3,4,5]

const contagem2 = [...contagem, 6, 7, 8]

console.log(contagem2)

