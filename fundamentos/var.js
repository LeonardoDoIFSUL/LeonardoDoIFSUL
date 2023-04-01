//Toda variavel fora de uma função, fica armazenada no Objeto "window" que é escopo global!
{
var a = 123;
}
console.log(a);//Essa variavel esta em escopo global

function teste(){
    var b = 456;//Toda variavel dentro de função, tem escopo só dentro do bloco
    console.log("Dentro do bloco: "+b);
}
teste()
console.log("Fora do bloco: "+b); //ReferenceError | Ele não existe aqui fora

//Em Node.js o objeto global é "Global", já no console do chrome é "window"
