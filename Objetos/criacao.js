//Literal
const obj = {
    nome: "Anao"
}
console.log(obj)

//Object em JS
const obj2 = new Object //-> define obj2 como um Objeto
obj2.nome = "Laila"
console.log(obj2)

//Função Construtora
function Produto(nome,val,desc){
    this.nome = nome //O THIS torna esse parametro acessivel fora do escopo do Objeto
    this.getDesconto = () => {
        return (val * (1 -desc)).toFixed(2) //Ele consegue acessar os dados enviados ao Obj pois, herda o escopo que ele esta
    }
}

const p1 = new Produto("Iphone",5590.90,0.1) // Defini valores enviados ao Obj e armazenei p1
const p2 = new Produto("Notebook DELL", 3400.90,0.2)
console.log(p1.nome,"R$",p1.getDesconto()+"\n"+p2.nome,"R$",p2.getDesconto())

//Função Factory
function criarFuncionario(nome,salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const NovoFunc1 = criarFuncionario("Valdeci", 7800, 4)
const NovoFunc2 = criarFuncionario("Mimosa", 12000, 1)
console.log(NovoFunc1.nome, "R$",NovoFunc1.getSalario()+"\n"+NovoFunc2.nome, "R$", NovoFunc2.getSalario())

//Objet.create
const filha = Object.create(null)
filha.nome = "Ana", filha.idade = " 32"
console.log(filha)

//Tradução de JSON -> Linguagem de resposta de server muitas vezes
const fromJSON = JSON.parse('{"nome":"Joana"}')
console.log(fromJSON.nome)