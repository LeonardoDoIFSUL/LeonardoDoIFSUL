const prova = nota => nota >= 6 ? "Aprovado" : "Reprovado"; //Ternario com arrow
console.log("O aluno esta:",prova(7.5));
console.log("O alunos esta:", prova(5));

function aprovados(nota){
    return nota <= 8 && nota >= 6 ? "Aprovado baixo" :
    nota > 8 ? "Aprovado com folga": "Reprovado" //Ternario dentro de Ternario

}

console.log(aprovados(5))