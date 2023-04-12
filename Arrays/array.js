//Todo Array literal é um objeto

//Aqui ele cria um Array com os valores que voce especificou
let aprovados = new Array("Bia","João","Magalifenia")
console.log(aprovados)
console.log(aprovados[3])//Aqui retorna undefined, pois o indice 3 não existe

aprovados[3] = "Paulo" //Adiciona especificando o indice
aprovados.push("Leonardo") //Adiciona a partir do ultimo indice
console.log(aprovados)

aprovados[9] = "Rafael" //Aqui ele cria todas as posições vazias até o indice 9 com undefined
console.log("Tamanho do array:",aprovados.length)//Indica o tamanho do array
console.log(aprovados[8] === undefined)

aprovados.sort() // Ele altera o array, ordenando ele alfabeticamente | IMPORTANTE
console.log(aprovados)

delete aprovados[1] //Aqui eu torno o indice 1 para UNDEFINED
console.log(aprovados[1])
console.log(aprovados[2]) //Os outros indices não são afetados

aprovados.splice(1,2) //Exclui 2 elementos, contando a partir do indice 1 | "João","Leonardo"
console.log(aprovados)

//Aqui ele adiciona estes 3 valores à partir do indice 1 | "Bia"
aprovados.splice(1,0,"Magali","Cascão","Cebolinha")
console.log(aprovados)