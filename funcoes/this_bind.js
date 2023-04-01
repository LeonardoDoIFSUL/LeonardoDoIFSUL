const pessoa = {
    nome: "Antonio",
    fala: "Saudações!",
    falar(){
        //Só consigo acessar essa variavel usando THIS | Culpa do escopo
        console.log(this.fala) 
    }
}

//Aqui ainda funciona pois ela é chamada diretamente, aponta para pessoa
pessoa.falar() 

const humano = pessoa.falar
humano() //Armazenei ela em uma variavel, deu erro no this que agora aponta para humano

//Limitei/amarrei o escopo THIS para no maximo o objeto pessoa, onde tem a função falar
const humano_correto = pessoa.falar.bind(pessoa)
humano_correto()
