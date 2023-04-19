//Um modulo sempre retorna uma função, e tudo o que estiver dentro dela...

//neste exemplo, ele recebe varios nomes (...)
module.exports = (...nomes) => {
    return nomes.map(nome => `Boa semana ${nome}!`)
}