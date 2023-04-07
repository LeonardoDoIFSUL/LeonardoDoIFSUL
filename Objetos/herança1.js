const Carro = {
     velAtual: 0,
     velMax: 200,

     acelerarMais(delta){
        if(this.velAtual + delta <= this.velAtual){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
     },
     status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
     }

}

const ferrari = {
    __proto__:Carro,
    modelo: "F40",
    velocidadeMaxima: 400,
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}
const volvo = {
    modelo: "Junk",
    velocidademaxima: 450,
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}
//Setei que volvo herdava os parametros do Obj Carro    
Object.setPrototypeOf(volvo,Carro)

console.log(ferrari.__proto__) //Todo objeto tem esta propriedade, é o mesmo que .prototype em Object
console.log(ferrari.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)
ferrari.acelerarMais(50)
volvo.acelerarMais(100)
console.log(volvo.status())
console.log(ferrari.status())
