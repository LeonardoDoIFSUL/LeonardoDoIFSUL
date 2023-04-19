const fs = require('fs')

const caminho = __dirname + './arquivo.json'

//sincrono, aqui ele lê o arquivo | PESADO
const conteudo = fs.readFileSync(caminho,'utf-8') //Tem que especificar o arquivo e o ENCODE correto, neste caso UTF-8

//assincrono, aqui ele lê o arquivo só após ler todo o modulo | LEVE
fs.readFile(caminho,"utf-8",(err,conteudo)=>{
    if(err) throw err
    const config = JSON.parse(conteudo) //tranformei em String
    console.log(`${config.db.host}: ${config.db.port}`) //Acessei o arquivo e peguei as variaveis do Objeto JSON
    
})

//Assincrono, aqui ele devolve o nome das pastas em um ARRAY | LEVE
fs.readdir(__dirname,(err,arquivos)=>{
    if(err) throw err
    console.log("Tudo o que esta dentro desta pasta: ")
    console.log(arquivos)
})

//Maneira mais facil de acessar um arquivo: (Devolve direto um Objeto, sem precisar de PARSE) | PESADO
const config = require('./arquivo.json')
console.log(config.db)