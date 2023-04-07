function cons(num){
    let check= `${(num).toFixed(2)}`
    let novaString = check.replace('.',",")
    console.log("O novo valor é R$"+ novaString)
}
cons(0.329999)