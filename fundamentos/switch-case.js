const imprimirEscala = function(nota) {
    switch(Math.floor(nota)){ //Arredonda para baixo
        case 10:
        case 9:
            console.log('Aprovado alto')
            /*Sem o "break;" ele vai percorrer todos os "cases"
            mesmo que o primeiro esteja correto até achar um break;
            por isso o "aprovado baixo" se repete duas vezes no terminal ;) */
        case 8: case 7: case 6:
            console.log('Aprovado baixo')
            break //Aqui o código sai da estrutura de "cases" e cai em "Default"
    
        case 5: case 4: case 3: { //pode ser colocado em bloco, mas não é comum
            console.log('Reprovado em recuperação')
            break
        }
        case 2: case 1: case 0:
            console.log('Reprovado definitivo')
            break;

        default:
            console.log('Valor de nota invalida...')
    }
    console.log('---------------------------') //Cada break executa o que esta fora do Switch
}

imprimirEscala(10.0)
imprimirEscala(8.1)
imprimirEscala(5.3)
imprimirEscala(2.4)
imprimirEscala(11.11)

