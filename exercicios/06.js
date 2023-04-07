function Simp(num = 0,tax = 0,temp = 0){
    let valorSimp = num * (tax * temp)
    this.comp= function(num,tax,temp){
        let valorComp = num * (1 + tax) ** temp
        console.log("Composto R$",(valorComp).toFixed(2))
    }
    console.log("Simples R$",(valorSimp).toFixed(2))
}
let retorno = new Simp(1000,0.5,60)
retorno.comp(5000,0.6,60)

//Fiz como se fosse uma função de um construtor