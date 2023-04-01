let isActive = false;
console.log(isActive);
//teste de variaveis em logs

isActive = 1;
console.log(!isActive); 
/*
 Aqui ele imprime a negação da variavel,
assim o valor 1 que era "verdadeiro" agora aparece como "falso"
 */

console.log(!!isActive);
/*
 Aqui ele imprime o valor que ele é, 
neste caso o 1 é "verdadeiro"...
 Isso é util para condicionais do tipo: 
    "Se isActive for verdadeiro(!!isActive) faça isso ->" 
*/

console.log("Todos os valores verdadeiros...");
console.log(!!' ');
console.log(!!1);
console.log(!!-1);//Qualquer valor não sendo zero é positivo
console.log(!!'Posi');// Texto com pelo menos 1 caractere é positivo
console.log(!!(isActive=true));//Modificação no parametro também conta
console.log(!![]);//Arrays são sempre positivos mesmo sem nada
console.log(!!{});//Objetos também são considerados positivos
console.log(!!Infinity);

console.log(
    "---------------------------------------------"
    );

console.log("Todos os valoroes negativos...");
console.log(!!'');//Muito util para verificar campos vazios em form
console.log(!!0);
console.log(!!null);
console.log(!!(isActive=false));
console.log(!!undefined);//Bom para testar variaveis, como nome de user
console.log(!!NaN);//"Not a Number" também é considerado false

console.log(
    "---------------------------------------------"
    );

console.log(" Try Catch Throw (burro)...");
console.log(!!("" || null || 0 || []));
// O resultado é verdadeiro, por conta do ultimo item, que é Array