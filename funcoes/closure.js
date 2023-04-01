//Closure é o escopo criado quando uma função é declarada

const x = "Global"

function fora(){
    const x = "Local"
    function dentro(){
        return x
    }
    return dentro
}

const veredito = fora()()
console.log(veredito)