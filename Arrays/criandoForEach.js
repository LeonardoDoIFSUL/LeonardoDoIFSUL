//Para criar uma função para ESTRUTURAS DE DADOS PRIMITIVOS em JS, eu SEMPRE USO:
// tipoDeEstrutura.prototype.minhaNovaFunction()


//Estrutura: Array
const aprovados = ["Joana","Maria","Joao","Joaquim","Joselino"]

//Criando minha função forEach2
Array.prototype.forEach2 = function(callback){
    for(let i in this){ //O THIS referencia qualquer Array que chame essa função
        callback(this[i],i,this)
    }
}

//Usando minha função forEach2
aprovados.forEach2(function(nome,indice){
    console.log(`${indice} - ${nome}`)
})

//Usando forEach nativo
aprovados.forEach(function(nome,indice){
    //-> Função CallBack devolve o valor e o indice | Respectivo 
    console.log(`${indice} - ${nome}`)
})

