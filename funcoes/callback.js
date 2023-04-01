const marcas = ["Mercedes","BMW","Chevrolet","Ford"];

function impressao(nome,indice){
    console.log(`${indice + 1}- ${nome}`)
}

marcas.forEach(impressao)
marcas.forEach(fabricante => console.log(marcas))

//Callback é a chamda de funções em um enlace, neste exemplo o forEach

//É util para querys em BD, para efutar try, catch throw