console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//String é um time fundamental de parametro, mas em JS ele é considerado function
String.prototype.reverse = function(){
    //Aqui eu criei uma função que não existe na API por padrão
    return this.split('').reverse().join('')
}
//String normal
console.log("String normal:","Subi no onibus")

//String com minha função
console.log('String com minha função:', "Subi no onibus".reverse())


//Posso modificar funções ja existentes no JS tbm | NÃO RECOMENDADO, TENHA CUIDADO
String.prototype.toString = function(){
    return "Agora fudeu, não retorna mais nada"
}

console.log("Qualquer palavra".reverse())