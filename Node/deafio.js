//Este exemplo não poderá ser feito, pois o arquivo não pode ser acessado...
//Mas funcionaria caso isso fosse possivel

//DESAFIO: Encontrar neste arquivo a MULHER CHINES COM MAIOR SALARIO e retornar isso no console.log

//Neste exemplo será usado .map(), .filter() e .reduce() além de outras coisas ensinadas no curso

//Arquivo contendo o objeto Funcionario
const url = require('https://files.cod3r.com.br/curso-js/funcionarios.json') 
const axios = require('axios')

const chineses = f => f.pais === "China"
const genero = f => f.genero === "F"
const maiorSalario = (func,funcAtual) => {
    return func.salario > funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios) Aqui ele vai mostrar os funcionarios dentro do arquivo 

    const func = funcionarios.filter(chineses).filter(genero).filter(maiorSalario)

    console.log(func)
})