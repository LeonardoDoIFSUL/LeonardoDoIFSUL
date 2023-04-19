//este arquivo gera um novo JSON contendo as informações do Objeto "producao"

const fs = require('fs')

const producao = {
    nome: "Leonardo",
    preco: 13.88,
    desconto: 0.2
}

fs.writeFile(__dirname+'/arquivoGerado.json',JSON.stringify(producao), err =>{
    console.log(err || "Arquivo salvo!")
})