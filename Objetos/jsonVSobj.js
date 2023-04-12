//Enviando objetos para JSON
const obj = {a:1,b:2,c:3,d:4, soma(){return a+b+c}}
console.log(JSON.stringify(obj)) //Transformei em JSON

//Recebendo dados de objeto atravez de JSON
//Transformei JSON em objeto e armazenei
const obj2 = JSON.parse('{"a":1.3,"b":"string","c":{},"d":[],"e": true}') 
console.log(obj2) 