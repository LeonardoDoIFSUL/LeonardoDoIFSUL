/*Os tres pontos na função(Operador Spread), indicam que "param" é um array que vai conter todos 
os parametros que eu colocar depois de "f" para dentro da função "novo"
*/

//Criei uma função para servir de Model para um Objeto
function Aula(fala,numero){
    this.fala = fala
    this.numero = numero
}

//Simulando a função new | Criação de Objetos
function novo(f, ...params){ // <--
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
} 

const aula1 = novo(Aula,'Bem-Vindo',123)
console.log(aula1)