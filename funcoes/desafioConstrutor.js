function Pessoa(nome = "Não informado"){
    this.nome = nome
    this.falar = () => console.log("Meu nome é:", `${this.nome}`)
}
const criando = new Pessoa("Josefo")
criando.falar()