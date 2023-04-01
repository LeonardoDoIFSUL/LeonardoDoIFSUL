//DESTRUTURING EM OBJETOS
const pessoa = {
    nome: "João",
    idade: 18,
    endereco: {
        rua: "Alguma rua e pá",
        numero: 42
    }
}

//Aqui as chaves de dentro do objeto pessoa são tiradas e atribuida a outras variaveis "n" e "i"
const {nome: n, idade: i}  = pessoa;
console.log(n, i)

//Aqui a variavel criada é "rua" contendo o valor de "pessoa.endereco.rua"
const {endereco: {rua}} = pessoa;
console.log("a rua dele é: ", rua);

console.log(pessoa.endereco); //Eles continuam existindo dentro do objeto