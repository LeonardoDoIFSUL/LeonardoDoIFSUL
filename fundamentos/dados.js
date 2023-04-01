var nome = "Leonardo "; // Esta variavel sobe ao topo do seu bloco de código e pode ser usada sem erro, porém ela é UNDEFINED

let idade = 20; /* Este tipo de dado funciona como cascata,
 apesar dele subir ao topo do bloco, somente receberá o valor de fato a partir da linha que ele foi escrito */

 const maiorIdade = 18; // este valor não pode ser modificado durante a execução do programa, ocorre um erro caso este valor mude

let palavra = "Tulipas ";
console.log(frase + palavra);

var frase = "São realmente lindas as: ";
console.log(frase + palavra);
