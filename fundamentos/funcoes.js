function soma(a, b){// Função sem retorno 
    console.log("+ O resultado é: " + a + b);
}

soma(2, 4);//passando valores para a função | correto

soma(2);//Neste caso, ele considera o "b" como undefined | erro

soma();//Considera os dois como undefined (ótimo para forms)| erro

soma(2, 3, 5, 6, 7);//Aqui ele considera somente os primeiros dois valores | meio correto

function subtracao(a, b = 0){//Função com retorno ("a" é undefined)
    return a - b;
}

console.log("- O resultado é: " + subtracao(3, 5));