//Neste exemplo a função map retorna um novo objeto com os valores indexados depois, atravez do set

const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('angular').framework)
