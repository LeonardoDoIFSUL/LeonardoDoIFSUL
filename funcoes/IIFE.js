// IIFE -> Immediately Invoked Function Expression

//Funções deste tipo fogem da abrangencia global,tudo que é definido ali não pode ser acessado fora

(function(){
    var paragrafo = "Sim!"
    console.log("Achou?", paragrafo)
})()//Esses parenteses executam o código dentro do escopo

console.log("Aqui eu te achei ?", paragrafo) //Erro, nunca via achar | culpa do escopo 