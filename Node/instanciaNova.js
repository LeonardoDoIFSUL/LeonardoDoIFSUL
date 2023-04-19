//Função FACTORY é a que retorna um novo objeto

module.exports = () => {
    return {
        valor: 1,
        inc(){
            this.valor++
        }
    }
}