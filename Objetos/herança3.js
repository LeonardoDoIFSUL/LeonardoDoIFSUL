const pai = {
    nome: 'joãozinho',
    corCabelo: 'Preto'
}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    //Aqui setei que o param "nome" é Bia, não pode ser mudado, mas pode ser listado
    nome: {value:'Bia', writable: false, enumerable: true},
    idade: {value: 20, writeable: true, enumerable: false} //Este não pode ser listado
})
filha2.nome = 'Joana'
console.log(filha2.nome)
console.log(Object.keys(filha2)) //Aqui eu faço uma procura pelos parametros

for(let key in filha2){
    filha2.hasOwnProperty(key) ? console.log(key): console.log(`Por herança: ${key}`)
}