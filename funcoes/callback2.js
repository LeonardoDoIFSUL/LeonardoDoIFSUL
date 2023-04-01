const nota = [1.8,5.8,9.0,8.9,6.8,7.8]

//Sem callback
const notasBaixas = []
for(let i in nota){
    if(nota[i] < 7) notasBaixas.push(nota[i])
}

console.log(notasBaixas)

//Com callback - function anonima
const notasBaixas1 = nota.filter(function (nota){
    return nota < 7
})
console.log(notasBaixas1)

//Com callback - arrow
const notasBaixas2 = nota.filter(nota => nota < 7)
console.log(notasBaixas2)

//Com callback - chamando arrow 
const filtro = nota => nota < 7
const notasBaixas3 = nota.filter(filtro)
console.log(notasBaixas3)
