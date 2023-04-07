//Objetos contantes apontam para endereços de memoria, este endereço nao pode ser mudado

//Porém os dados dentro deste endereço podem ser modificados... EX:
//Pessoa -> 123 -> {...} Só o que mudou foi os parametros dentro do mesmo endereço
const pessoa = {nome: "Jonatas"}
pessoa.nome = "Mario"
console.log(pessoa.nome)

//Eu consigo fixar um objeto e bloquear modificações... EX:
Object.freeze(pessoa) //Essa função não permite modificar dados dentro de um objeto especificado
pessoa.nome = "Joãozinho"
console.log(pessoa.nome)

//Aconteceria erro, caso eu tentasse modificar o endereço de pessoa... EX:
pessoa = {nome: "Malaga"} //Aqui ele tenta mudar o endereço do Obj | Erro
console.log(pessoa)
