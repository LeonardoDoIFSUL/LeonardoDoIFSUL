const lodash = require('./lodash')

//Pega numeros randomicos entre 0 e 10 com intervalo de 2 segundos
setInterval(()=> console.log(_.random(5,10)),2000)

/*
Se voce executar o arquivo usando o comando NODEMON na linha de comando, voce pode alterar
qualquer coisa neste código e ele será executado na hora que for salvo,
com as modificações feitas
*/ 

//usando NODEMON, o comando "rs" vai dar REFRASH na aplicação, caso tenha algo errado