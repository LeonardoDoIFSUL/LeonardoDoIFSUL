/*Internamente ele é um FOR que executa uma função,
criando um novo array do mesmo tamanho do original
mas com valores diferentes, dependendo 
do que for passado na função.

MAP pode ser usado em sequencia, usando diferentes funções para tratamento dos dados
criando funções soltas que serão usadas juntas para incrementar os dados originais
*/

const nums = [1,2,3,4,5]

let resultado = nums.map(function(e){
    return e * 2 //A função deste MAP é criar um array com os valores multiplicados
})
console.log(resultado)

//Exemplo da explicação: funções soltas
const triplo = e => e*3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

//Exemplo da explicação: Concatenação de MAPs gerando um Array de dados novo
console.log(resultado.map(triplo).map(paraDinheiro))