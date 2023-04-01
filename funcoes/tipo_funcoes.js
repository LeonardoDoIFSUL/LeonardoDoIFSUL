//Função nomeada
function func1(){ console.log('func1')}
func1()

//Funções armazenada em variavel
const func2 = function() { console.log('func2')}
func2()

//Função arrow
let func3 = (nome) => 'Olá '+ nome
console.log('func3:', func3('francisco'))

//Função como retorno
function func4(a, b){
    return function(c){
        let soma = a + b + c //Só pra encher linguiça
        console.log('func com return:',soma) 
    }
} 
  //Passa a primeira função e depois a segunda em bloco diferente
func4(3,5)(5)
  //Ou pode ser em variaveis, nesse caso voce armazena primeiro...
const funcao = func4(6,7)
funcao(8) //Depois chama a variavel, passando um valor para dentro