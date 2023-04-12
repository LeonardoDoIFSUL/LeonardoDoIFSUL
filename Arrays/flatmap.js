//FlatMap traduz uma Matriz em um array de estrutura simples

//A matriz pode ser varios Objetos com parametros dentro de um array

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const escola =  [{
    nome: "Turma M1",
    alunos: [{
        nome:"Joaozinho",
        nota: 8.1
    }, {
        noma: "Ana",
        nota: 7.1
    }]},
    {
    nome:"Turma T2",
    alunos:[{
        nome:"Jonatas",
        nota:6.5
    }, {
        nome: "Çaso",
        nota:10
    }]
    }
]

const getNotasAlunos = aluno => aluno.nota
const getnotasTurma = turma => turma.alunos.map(getNotasAlunos)

const notas = escola.flatMap(getnotasTurma)
console.log(notas)