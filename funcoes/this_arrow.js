function Pessoa(){
    this.idade = 0

//Usando o arrow, THIS continua no escopo da função pessoa
    setInterval(()=>{ 
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa