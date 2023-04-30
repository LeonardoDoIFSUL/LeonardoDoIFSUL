//Essa função é util para criar login, primeiro verifica se esta logado e caso não, depois de 3 segundos ele retorna pop-up de login

function falarDepoisDe(segundos,frase){
    return new Promise((resolve,reject)=>{ //Ocultamente ele recebe primeiro um resolve e depois um reject 
        resolve(frase) //Logado
        reject(frase) //Deslogado
    },segundos * 1000) //Valor sempre em milisegundos
}


const minhaPromise = (palavra="Não me passaram nada",e="Caso dê erro eu apareço")=>{
return new Promise((resolve,reject)=>{
resolve(palavra)
reject(e)
})
}

//Minha criação
minhaPromise("Eu passei esse valor")
.then((palavra)=> palavra.concat("!\n"))
.then((resultado)=>console.log(resultado))
.catch(e=>console.log(e))

falarDepoisDe(3,"Isso é util para pop-up de login e consulta em bancos")
    .then((frase)=> frase.concat("!?!?!"))
    .then(outraFrase => console.log(outraFrase)) //Atua no RESOLVE, atribui uma função, toda vez que "falarDepoisDe" for chamado
    .catch(e => console.log(e)) //Atua no REJECT