let array = [1.2 , 3 ,"Valor 2"];

array[3] = false; //para adicionar pode ser sem metodo

array.push([{id: 3}, true, null, "elemento"]);
/*
Este metodo insere novos indices no array e indexa sucessivamente,
o elemento [4] é um OBJETO, muito importante então estude sobre!!!
*/

console.log("array é: " + array); //Não precisa fazer contador para mostrar todos os indices
console.log("tamanho: " + array.length);//Aqui ele conta o tamanho do array

console.log("Deletando indices...");

delete array[0];
console.log(array.pop());//Aqui ele retorna o ultimo valor e exclui ele, util para busca em BD 