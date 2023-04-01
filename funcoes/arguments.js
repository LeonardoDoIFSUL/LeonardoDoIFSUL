let a = [2,3,4,5]

function soma(){
    let soma = 0
    for(let i=0;i<arguments.length;i++){
        soma += arguments[i]
    }
    return soma
}

console.log(soma(a,' texto'))
//O zero é o valor padrão de soma, que só concatenou os outros itens