//TODOS OS ARQUIVOS GLOBAL PODEM SER ACESSADOS EM QUALQUER ARQUIVO QUE DÊ REQUIRE() NELE

console.log(global)

global.MinhaApp = {
    saudacao(){
        return "Estou estou em todos os arquivos kk, foda==se"
    },
    nome: "Leonardo"
}

global.MinhaAppFechado = Object.freeze({
    saudacao(){
        return "Eu estou em todo lugar, mas ninguem pode me mudar"
    },
    nome: "josé"
})