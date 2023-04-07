const Pessoa = {
    nome: "joana",
    idade: 15,
    peso: 13
}
//As funções a seguir são ESSENCIAIS para obter informações de Objetos 
console.log(Object.keys(Pessoa))
console.log(Object.values(Pessoa))
console.log(Object.entries(Pessoa)) 

//A variavel "e" assume os valores tanto de chave como de valor em sequencia
Object.entries(Pessoa).forEach((e)=>{
    console.log(`${e}`)
})

//Armazenei os valores nessas variaveis
Object.entries(Pessoa).forEach(([chave,valor])=>{ 
    console.log(`${chave}: ${valor}`)
})

//Aqui eu dei as permissões de escrita e visibilidade para o objeto Pessoa
Object.defineProperty(Pessoa, 'dataNascimento',{
    enumerable: true,
    writable: false,
    value: '01/01/2003'
})
Pessoa.dataNascimento = '01/01/2017' //Tentei modificar o valor 
console.log(Pessoa.dataNascimento)
console.log(Object.keys(Pessoa))

//Aqui eu concatenei os valores e parametros dos outros objetos em 1 só 
const dest = {a: 1}, o1 = {b:2, c: 3}, o2 = {a:4}
const obj = Object.assign(dest,o1,o2)

//Bloquiei as modificações dentro de um objeto
Object.freeze(obj)
obj.c = 1234
console.log(obj)