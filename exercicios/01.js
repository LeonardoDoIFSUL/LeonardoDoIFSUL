function mate(pri, seg){
        let soma = pri + seg
        let sub = pri - seg
        let multi = pri * seg
        let divisao = pri / seg

    return console.log(Math.floor(divisao), multi, sub,soma)
}

mate(54, 42)