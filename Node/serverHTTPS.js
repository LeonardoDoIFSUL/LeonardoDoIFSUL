//Criando servidor de acesso basico

const http = require('http') //Método nativo do node

http.createServer((req,res)=>{ //criei um servidor que recebe um request e devolve algo
    res.write('Estou Funcionando no Browser! :)')
    res.end()//Finalisei a requisição

}).listen(8080) //Especifiquei a porta onde será acessado pelo "localhost:8080/"