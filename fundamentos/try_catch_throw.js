function mdsMuitaFuncao(){
    console.log("Realmente desnecessario tanta função assim...")
}

function impressaoErro(erro){
    //throw "Ocorreu um erro inesperado, tente novamente mais tarde!" | String
    //throw true | boolean
    //throw 404 | valor
    throw mdsMuitaFuncao() // | Função
}

const operacao = (pessoaNE) => {//Nome correto declarado neste escopo
    try {
        console.log("Vem cá",pessoae.nome.toUpperCase() + "!!!")//O nome do objeto ta errado
    } catch(e) {//Captura o erro e poe no objeto "e" que tem chaves contendo o erro do server
        return impressaoErro(e) //devolve uma função "throw" enviando "e"
    }
}
pessoa = {nome: "Ricardo"} //Objeto de escopo global | Pode ser acessado na const "operacao" 
operacao(pessoa);