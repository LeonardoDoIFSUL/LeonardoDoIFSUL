let a = 7;
let b = 94;

let trocaA = a;
a = b;
b = trocaA;

console.log("O valor de A é: " + a + " E o valor de B é: " + b);

//ou pode ser feito da maneira com array

[a, b]=[b, a];

console.log("Os valores com Array ficam, A: " + a + " E o valor de B é: " + b);