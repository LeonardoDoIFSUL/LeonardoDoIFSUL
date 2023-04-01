for(let i=0;i<10;i++){
    console.log(i); //Os parametros dentor dos parenteses, passam para dentro do bloco
}
console.log(i);//Mas não são lidos fora... | ReferenceError

//Por conta do código abaixo, o i foi lido como "var" mas sem ser iniciado
for(var i=0;i<10;i++){}
console.log(i);//Aqui a variavel é lida após a execução do bloco, por isso "i" tem valor 10