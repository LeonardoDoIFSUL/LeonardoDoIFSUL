const alunos = [
    {nome: "João", nota: 5},
    {nome:"Maria", nota: 7}
]

// Imperativo - Sistematico, explicado passo-a-passo
let total = 0
for(let i =0;i<alunos.length;i++){
    total += alunos[i].nota
}
console.log(total/ alunos.length)

// Declarativo - Indutivo, fica implicito seu funcionamento, omite informações
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length)