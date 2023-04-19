const anonimo = process.argv.indexOf('-a')!== -1 //indexei um argumento, que pode ser usado em um comando tipo "node nomeDoprograma.js -a"

console.log(anonimo) //Posso passar um argumento: npm i express -a | Caso o arg "-a" retorne "falso", nada acontece

if(anonimo){
    process.stdout.write('Fala anonimo!\n') //STOUT -> saida padrão
    process.exit() //por padrão ele finaliza automatico mas pode ser forçado
} else{
    
    process.stout.write("Informe seu nome: ") //Mostra algo no terminal

    process.stdin.on('data', data=>{ //Pega o valor digitado no terminal 
        const nome = data.toString().replace("\n", " ")

        process.stout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}
