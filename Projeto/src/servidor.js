const bancoDeDados = require('./banco')
const bodyParser = require('body-parser');
const porta = 3030 //Valor da porta que vai rodar a aplicação
const express = require('express')

const app = express() //Armazena os resultados da função express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
app.get('/produtos', (req,res,next)=>{ console.log("middleware1..."); next()}) //Middleware, primeiro passa aqui e depois vai para o GET debaixo

app.get('/produtos', (req,res)=>{ res.send({nome:"Notebook", preco: 2950.00})}) //Vai converter para JSON

app.use('/produtos', (req,res,next)=>{ res.send({unico: "Tudo passa por mim primeiro kk"}); next()}) //Qualquer endereço de requisição GET vai para nele

app.get('/procuraBanco',(req,res)=>{res.send(bancoDeDados.getProdutos())})
*/

//Esse parametro :id pode ser qualquer parametro, como :nome | :qualquerCoisa e ser passado pra dentro do modulo bancoDeDados
app.get('/procuraBanco/:id',(req,res)=>{res.send(bancoDeDados.getProdutos(req.params.id))}) 

//Envia novo produto
app.post()('/procuraBanco',(req,res,next)=>{
    const produto = bancoDeDados.salvarProduto({ //Estou armaenando os valores de retorno do modulo bancoDeDados para dentro do "Produto"
        nome: req.body.nome, //Valores enviados pela URL
        preco: req.body.preco //Valores enviados pela URL
    })
    res.send(produto)
})

//Edita produto existente ou cria novo
app.put()('/procuraBanco/:id',(req,res,next)=>{
    const produto = bancoDeDados.salvarProduto({ //Estou armaenando os valores de retorno do modulo bancoDeDados para dentro do "Produto"
        id: req.body.id, //Valores enviados pela URL
        nome: req.body.nome, 
        preco: req.body.preco 
    })
    res.send(produto)
})

app.delete()('/procuraBanco/:id',(req,res,next)=>{
    const produto = bancoDeDados.excluirProduto(req.params.id) //Exclui o produto pela ID
    res.send(produto) //Devolve o produto excluido
})

app.listen(porta = ()=>{
    console.log(`Requisição rodando na porta: ${porta}.`) //Enquanto o processo estiver aberto, a porta estará ocupada
})

//TESTAR NO POSTMAN, depois de arrumar o Node