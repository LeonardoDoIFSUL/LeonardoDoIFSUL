/*
REDUCE concatena valores de varios indices em um array de um indice: array[0]
return dele é:  
    ACOMULADOR -> Primeiro a ser concatenado
    ATUAL -> Valor que será concatenado ao acomulador
    INICIO -> Valor do qual ele vai começar a concatenar
*/

const alunos = [
    {nome:"iasmyn",nota:7.5},
    {nome:"Lariassa",nota:5},
    {nome:"Joana",nota:9.0}
]

const passados = alunos.map(e => e.nota).reduce(function(acomulador,atual){
    console.log(acomulador, atual)
    return acomulador + atual
})
console.log(passados)