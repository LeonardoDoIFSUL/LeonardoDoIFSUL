//P.O.O em JS é baseada em função, isso à difere de outras linguagens, mas a logica permanece 

function Carro(velocidadeMaxima = 200, delta = 5) {

    let velocidadeAtual = 0;

    this.acelerar = function(){
        if(velocidadeAtual + delta < velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
//O THIS torna esta função publica para fora do objeto
    this.getVelocidade = function(){
        return velocidadeAtual
    }
}

//Primeiro Objeto = uno
//Ele usa os valores default colocados no cabeçalho do objeto
const uno = new Carro
uno.acelerar()
console.log("O uno está a:", uno.getVelocidade(),"Km/h")

//Segundo Objeto = unoComEscada
//Ele usa os valores que eu passei como parametro (somente para este objeto)
const unoComEscada = new Carro(400,50)
unoComEscada.acelerar()
console.log("O uninho com escada esta na velocidade de:", unoComEscada.getVelocidade(),"Km/h")