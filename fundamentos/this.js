function cozinha(utensilho){
    this.utensilho = utensilho
    this.comer = () => {
        console.log("Estou comendo");
    }
}
const garfo = new cozinha("garfo");//A variavel "garfo" vai armazenar o objeto cozinha.utensilho
const faca = new cozinha("Faca");//Aqui faz a mesma coisa, com o valor passado...

console.log(faca.utensilho)//Se chama a função atravéz da constante que recebe o Objeto 
garfo.comer() //A função sempre ter que ser chamada atravez da variavel | Neste caso o "garfo"

/* 
 SEMPRE CHAMAMOS FUNÇÕES DENTRO DE OBJETOS ATRAVÉZ DAS VARIAVEIS DE FORA
QUE RECEBEM OS OBJETOS: 

O que recebe o objeto? 
    => "const garfo" (Por ela a gnt acessa as funções dentro do objeto e é passado o parametro)
Como passo o parametro?
    => (new cozinha("parametro sendo enviado"))

EXEMPLO: 
    Para acessar a variavel, dentro do objeto: objeto(parametroRecebido);

    Primeiro eu envio o valor: const nomeDaConst = new cozinha("parametroEnviado")

    Depois eu acesso, assim: nomeDaConst.parametroRecebido 

    Em função é a mesma coisa mas chamando função: nomeDaConst.nomeDaFunção()

    ;)
*/