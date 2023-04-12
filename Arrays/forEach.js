//ForEach sempre devolve nesta ordem: 1 - valor, 2 - indice e 3 - Array

const aprovados = ["Joana","Maria","Joao","Joaquim","Joselino"]

aprovados.forEach(function(nome,indice){
    //-> Função CallBack devolve o valor e o indice | Respectivo 
    console.log(`${indice} - ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

