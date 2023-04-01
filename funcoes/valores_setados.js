//Fazer condicionais desta maneira é contra indicado
function soma(a, b, c){
    a = a || 1
    b != undefined ? b:2
    c = isNaN(c) ? c: 4

    return a+b+c 
}
console.log("Não passando parametro:",soma()) 
//Caso não seja passado nada, as variasveis assumem o valor o segundo param
console.log("Passando parametro:",soma(1,3,5)) 
//Caso seja passado, ele ocorre normalmente


//Forma correta de condicionais hoje em dia
function soma_correta(a=1,b=2,c=3){
    return a+b+c
}
console.log("Soma correta:",soma_correta(5)) //Apenas a variavel A recebeu um valor pelo usuario