//module.exports serve para mandar uma função ou retorno para outro arquivo no sistema de modulos

let a = 2 //ISSO NÂO SERÁ VISIVEL PARA OUTROS MODULOS, POIS NÃO FOI EXPORTADO COMO OBJETO

module.exports = {
    bomDia: "Bomdia",
    boaNoite() {
        return "Boa noite"
    }
}