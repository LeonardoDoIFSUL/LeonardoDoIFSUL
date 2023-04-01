let idade = 30; // Pseudo INT. pois javascrypt entende este campo como NUMBER
let valores = 30.50 //Pseudo FLOAT. pois javascrypt entende este campo como NUMBER
var nome = "Leonardo"; //String
const estaChovendo = true; //boolean 

console.log(typeof nome); // Typeof serve para descobrir qual o tipo de dado da variavel passada

//todo Código em JS é diviido em sentenças e blocos de código

{ // bloco de código
    console.log("Código em bloco") // sentença
}

/* 
  quando executamos um arquivo em browser, temos disponiveis todas as bibliotecas
 usadas no projeto EX: JQuery 
 */

 /*
  quando se usa VAR para declarar uma variavel, podemos redeclarar ela usando
  o mesmo nome de variavel, assim o valor dela será o que estiver mais abaixo no código
  ex:
 */

  var a = 3;
  var a = 30;
  console.log(a); // isso não ocorre em LET, por isso sempre prefira usar LET ao invés de VAR