//DESTRUTURING DE ARRAYS
const [a] = [10]; //A variavel "a" vai receber o array de uma posição[0] contendo valor 10

const [,[,nota]] = [[8,8,8],[7,8,9]];
/*
EXPLICAÇÃO: Aqui ele ignora o primeiro item do array e já no segundo array,
pula o primeiro indice e pega o segundo "[8]" e atribui na constante "nota"
*/
console.log(nota)