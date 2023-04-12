class Avo {
    constructor(nome="Machael",sobrenome="Jackson"){
        this.nome = nome
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome,nome, profissao="Professor"){
        super(sobrenome)//Super tem que ser o primeiro parametro antes de qualquer THIS
        this.nome = nome
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(sobrenome,profissao,nome){
        super(sobrenome,profissao)//Super só pode ser chamado 1 vez
        this.nome = nome
    }
}

const filho = new Filho
console.log(filho)