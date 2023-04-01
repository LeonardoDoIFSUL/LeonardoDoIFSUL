//aqui são identificados os numeros de JS que é FRACAMENTE  TIPADO 

var int = 1.0; // este valor, apesar do ponto, é considerado INT por conta de servir para os dois tipos

var float = 1.1;

let number = Number("2"); 

console.log(int, float, number);
console.log("A variavel int é um inteiro: " + Number.isInteger(int));
console.log("A variavel float é um inteiro: " + Number.isInteger(float));

//tranformando um numero em binario com toString
let numeral = 988502824.1;
console.log(numeral.toString(2));