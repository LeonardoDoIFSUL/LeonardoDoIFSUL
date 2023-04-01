//operações estranhas em JS é o infinito de numeros divididos por zero
var fracao = 7 / 0;
console.log(fracao);

//uma string pode se tornar um valor também, é bom cuidar para nunca misturar Strings com numeros em logs
console.log("10"/2);

console.log("Legal!" * 2);// isto não imprime duas vezes a String *outras linguagens isso pode acontecer*

console.log(0.7 + 0.2);//O valor gerado não é 0.9, por conta de uma limitação da ferramenta *Ela nao arredonda*