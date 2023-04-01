for(let i=0;i<10;i++){
    console.log(`indice = ${i}`)
}

for(let i=0;i<10;i++){ //Inicializei uma variavel de mesmo nome, mas com escopo diferente
    console.log(`indice pulando 1 casa= ${i++}`)
}

for(let i=0;i<1000;i++){ //Ele vai parar só quando o valor atribuido a "i" for maior que 1000
    console.log(`indice = ${i**=2}`)//Ou seja: aqui ele indexa um valor maior que 1000 à "i"
}
