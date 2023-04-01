//A função pode armazenar o retorno de uma função...
const soma = function(a, b) {
    return a + b //a constante soma vai receber o return desse bloco de código
}
console.log(
    "Resultado da soma: " + soma(3, 5));//Chamando a constante voce passa os valores ou não

//Função Arrow é uma forma mais simples de escrever uma function (ECMA 2015)...
const subtracao = (a, b) => { //Equivalente ao function(){ }
    return a - b;
}  
console.log("Resultado da subtração: "+subtracao(3, 5));

//Retorno Implicito | Boa para funções pequenas | 
const divisao = (a, b) => a/b; // Mesmo assim, divisão vai receber o return dessa function 
console.log("Resultado da divisão: "+divisao(8, 4));

//Retorno implicito de parametro unico
const imprimirAlgo = a => console.log(a);
imprimirAlgo("Curso Cod3r!!");