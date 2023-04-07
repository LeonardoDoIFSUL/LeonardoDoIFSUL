function triangulo(cat1, cat2, hipo){
    if(cat1 == cat2 && cat1 == hipo){
        console.log("Triangulo Isóceles")
    } else if(cat1 == cat2 && cat1 != hipo || cat1 == hipo && cat2 != cat1){
        console.log("Triangulo Equilatero")
    } else if(cat1 != cat2 && cat2 != hipo){
        console.log("Triangulo Escaleno")
    }else{
        console.log("Apenas numeros")
    }
}

triangulo(1,2,3)
triangulo(2,2,2)
triangulo(3,3,4)