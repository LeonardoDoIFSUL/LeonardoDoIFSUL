const saudacao = "Oi..."; //Contexto lexico 1

function darOi(){
    const saudacao = "Oi, sou uma função";//Contexto lexico 2
    console.log(saudacao)
}

const darOla = {
    saudacao: "Oi, sou um Objeto" //Contexto lexico 3
}

console.log(saudacao);
darOi()
console.log(darOla);

//Todos os contextos tem constantes me mesmo nome, mas nenhuma interfere na outra