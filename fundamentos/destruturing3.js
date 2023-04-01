//Predefinindo valores caso o destruturing não receba nenhum objeto
function randomico({min = 0, max = 100}){
    const valor = Math.random() * (max-min) + min;
    return Math.floor(valor); //Arredondando o valor para baixo
}
// Enviando valores dentro de uma estrutura de objeto
console.log("Passando valor direto: ", randomico({min: 200, max: 500}));

objeto = { //Criando um objeto com valores para o destruturing
    min: 100,
    max: 2000
}
//enviando o objeto
console.log("Passando o objeto: ", randomico({objeto})); 

/*
Quando é chamada a função mas não é enviado parametro, ele envia "undefined" e dá erro,
pois não há um objeto ou array para ser desestruturado
*/