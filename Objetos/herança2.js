//USANDO __proto__

//Aqui ele busca o parametro que conter o dado mais perto dele, mas desce na herança caso não ache
Object.prototype.attr0 = 'Z'
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: 'J'} //indexei o avo | Coloquei um parametro que ja existe
const filho = {__proto__: pai, attr3: 'C'} //indexei o pai
console.log(filho.attr0) //Procurei por um parametro que só existe no Object.prototype que é global
console.log(filho.attr1,filho.attr2,filho.attr3)

