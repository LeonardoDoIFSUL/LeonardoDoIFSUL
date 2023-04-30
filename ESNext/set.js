//Set serve para criar um novo objeto com onde chave e valor são a mesma coisa e não se repetem

const time = new Set()
time.add("Vasco")
time.add("São Paulo").add("Flamengo").add("Corinthians")

time.add("Flamengo").add("Vasco") //Aqui os valores são duplicados, então eles nao serão inseridos

console.log(time)
console.log(time.size)
console.log(time.has("Vasco"))
time.delete("Vasco")

//Todas as função de um objeto estão presentes para este set