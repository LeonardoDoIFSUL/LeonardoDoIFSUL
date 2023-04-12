//THIS referencia o array passado tipo: produtos[0]
//CALLBACK referencia os valores que saem do RETURN da função: verificaCaro -> return e

Array.prototype.filter2 = function(callback){
    let novoArray = []
    for(let i=0;i<this.length;i++){ 
        if(callback(this[i],i,this)){ 
        //Pega o this[i]- Valor | i- Indice | this- Array que foi passado
        
            novoArray.push(this[i]) // Pega somente o valor e adiciona no novoArray
        }
    }
    return novoArray 
}

const produtos = [
    {nome: 'Notebook', valor: 2960.00, fragil: true},
    {nome: 'Celular', valor: 3160.00, fragil: false},
    {nome: 'Ipad', valor: 4530.00, fragil: true}
]

//Função criada
const verificaCaro = function(e){
    if(e.valor < 3500)      
    return e
}

//Função criada
const verificaFragil = (e) => e.fragil 

console.log(produtos.filter2(verificaCaro).filter2(verificaFragil))
