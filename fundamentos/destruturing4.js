function randomicoArray([min=0,max=100]){
    //Condição inteligente para trocar os numeros usando Destruturing
    if(min > max)[min,max] = [max,min] 
    const valor = Math.random() * [max - min] + min
    return Math.ceil(valor); //Arredonda o valor para cima
}
console.log("O valor direto é:",randomicoArray([200,1000]));//Passando direto

const array = [500, 100]; //O valor esta trocado

console.log("Passando um array para a função:",randomicoArray(array)); //Passando array

/*
Quando é chamada a função mas não é enviado parametro, ele envia "undefined" e dá erro,
pois não há um objeto ou array para ser desestruturado
*/