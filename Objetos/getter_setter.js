const Pessoa = {
    _nome: "Desconhecido", //Convenção para parametro PRIVATE em JS
    _quantidade: 0,
    get pegaNome() { //Função para pegar nomes em JS, como em JAVA
        return this._nome + " É o nome dele" 
    },
    set botaNome(novoNome){ // Função para colocar nomes em JS, como em JAVA
        if(novoNome == undefined || this._quantidade == 0){ //Limito as modificações para só 1
            this._nome = novoNome
            this._quantidade++
        } 
    }
}
console.log(Pessoa.pegaNome)
Pessoa.botaNome = "Joãozinho"
console.log(Pessoa.pegaNome)
Pessoa.botaNome = "Pedrinho"
console.log(Pessoa.pegaNome)