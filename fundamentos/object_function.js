//Object é só uma função pré-existente de JavaScrypt
console.log(typeof Object);// Função
console.log(typeof new Object);// Objeto, criado a partir de função

const novoObjeto = function() {} //Variavel que contem uma função é lida como função
console.log(typeof novoObjeto())
console.log(typeof new novoObjeto()); //Aqui ela vira objeto


class produto{} //Aqui o produto é uma função escrita de outra maneira | ES6
console.log(typeof produto);
console.log(typeof new produto);


