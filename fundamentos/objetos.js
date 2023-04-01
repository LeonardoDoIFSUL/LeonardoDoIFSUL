//Um objeto em JS é uma coleção de chave e valores... Pode existir objetos dentro de objeto
const produto = {};
produto.nome = 'Veja Limpa rapido'; //Aqui eu criei uma chave com valor "Veja..."
produto.valor = 19.90;

console.log(produto);

const cliente = {// Isso cria um endereço na memoria com  essas chaves e valores:
    nome: 'alessander',
    idade: 32,
    profissao: 'construtor',
    obj: {
        vestimenta: 'EPI',
        obj:{//Pode ser criado chave de mesmo nome caso não esteja no mesmo nivel da outra
            ['ferramenta diaria']: 'martelao' //Esta chave pode ter espaço (NÃO RECOMENDADO!)
        }
        }
    }

console.log(cliente);
/* Caso eu mande o objeto Cliente para Produto e altere os valores, eles também vão ser
alterados na const Cliente, pois os dois apontam pro mesmo local na memoria! (CUIDADO) | RAM
*/
 