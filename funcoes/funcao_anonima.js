const soma = function(x,y){
    return x + y
}

const imprimirSoma = function(a,b,operacao=soma){
    console.log(operacao(a,b))
}

imprimirSoma(3,4)

imprimirSoma(3,4,soma)

imprimirSoma(3,4,function(x,y){
    return x-y
})

imprimirSoma(3,4,(x,y)=>x*y)

const Pessoa = {
    falar(){
        console.log("Olá, estou falando")
    }
}

Pessoa.falar()