function Pessoa() {
    this.idade = 0
    const self = this //Fixei o THIS em uma constante dentro do escopo da função Pessoa
    setInterval(function(){
        self.idade++ //Referenciei o parametro da mesma forma que o THIS
        console.log(self.idade)
    },1000)//Em 1 segundo executa o que esta dentro da função não nomeada que retorna a idade + 1
}

new Pessoa //Atribui toda a função á um objeto, só para armazenar os valores