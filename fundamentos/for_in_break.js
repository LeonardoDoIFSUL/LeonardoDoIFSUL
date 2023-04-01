notas = [1,2,3,4,5]
for(let i in notas){
    if(i == 5){continue} //Aqui ele não altera em nada sendo verdadeiro ou não
    console.log(`indice ${i} = ${notas[i]}`)
}

pessoa = {
    nome: "Leonardo",
    idade: 20,
    competencia: "Programador",
    endereco: { //Ele não entra aqui dentro, só reconhece que há algo ali
        rua: "Frei Henrique de Pá",
        numero: 1000
    }
}

for(let parametros in pessoa){
    console.log(`${parametros}:${pessoa[parametros]}`)
}

for(let i=0;i<10;i++){
    console.log(`indice ${i} = ${i+1}`)
    if(i == 5){break} //Quando chega no indice 5 ele sai do bloco FOR
}
console.log('Termino no programa!')

/*
BREAK e CONTINUE só funcionam em FOR() e WHILE(), mesmo que esteja
dentro de um bloco IF() ele vai agir para fora, no escopo do FOR()
saindo do laço...
*/