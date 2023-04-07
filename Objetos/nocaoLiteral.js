const a = 1, b = 2, c = 3

const obj1 = {a, b, c} //Aqui ele assume os valores declarados no escopo global destas constantes
console.log(obj1)

const nome = "nota"
const valor = 7.78

const obj2 = {}
obj2[nome] = valor //Criou um parametro com o valor da const "nome" com o valor declarado na const valor
console.log(obj2) 

const obj3 = {[nome]: valor}
console.log(obj3)

const obj4 = {
    funcao1: function(){ //Aqui eu criei uma função na maneira antiga

    },
    funcao(){ //Aqui eu abri uma função diretamente | ES6

    }
}
console.log(obj4)