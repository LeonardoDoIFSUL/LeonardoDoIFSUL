function getPreco (imposto= 0, moeda = "R$"){
    return `${moeda} ${this.preco *(1 - this.desc) * (1 + imposto)}`
}

const Item ={ //Objeto sem escopo global
    nome: "Notebook",
    preco: 4500.90,
    desc: 0.3,
    getPreco
}

console.log(getPreco(Item)) // Erro, pois o escopo do preco esta limitado à Item

global.preco = 20 //Determinei escopo global e defini ela como preco
global.desc = 0.3 //O mesmo aqui

console.log(getPreco()) // Correto em partess

console.log(Item.getPreco()) //Correto enviando parametros do Item

//USANDO CALL e APPLY

const carro = {preco: 49900, desc: 0.3}

//Assim eles funcionam igual, enviando o objeto carro para a função getPreco
console.log(getPreco.call(carro))

console.log(getPreco.apply(carro))

console.log("----------------------- Aqui é o uso-------------")

//CALL
console.log(getPreco.call(carro, 0.5, '$'))
//Acima enviei os parametros do obj carro e declarei as vars da função getPreco

//APPLY
console.log(getPreco.apply(carro,[0,3,'$']))
//Com apply fica mais facil de observar que o obj esta à parte dos params enviados ao getPreco