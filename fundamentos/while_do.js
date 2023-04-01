let valor = 0; // Condição favoravel para executar pelo menos 1 vez o while | "true"
//Nete caso se o valor fosse: valor = -1; Ele não entraria no while

const sorteio = function(min, max){
    let result = Math.random() * (max - min) + min //Sorteio
    return Math.floor(result) //Arredondamento para inteiro
}


while(valor != -1){ //Ele vai executar o bloco até que a condição seja "false"

    valor = sorteio(-1,10) //passagem de parametro, atribuindo resultado para a var "valor"
    console.log("Valor while: ",valor) //Mostrando o valor dentro da variavel naquela execução

}
let nada //Iniciei a variavel, que vai receber um valor dentro do while

do{ //Executa o bloco pelo menos uma vez
    nada = sorteio(0,5)
    console.log("Valor do:",nada) 
} while(nada == 0) //Se fosse somente while, não executaria nenhuma vez o bloco