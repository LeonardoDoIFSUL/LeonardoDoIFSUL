require('./global')

console.log(MinhaApp.nome, MinhaApp.saudacoes())
console.log(MinhaAppFechado.saudacoes())

MinhaApp.nome = "Eita isso é ruim..."
MinhaAppFechado.nome = "Esse nunca muda" 

console.log(MinhaApp.nome, MinhaAppFechado.nome )