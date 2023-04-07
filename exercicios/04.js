function divisor(div,num){
    let total = div/num, resto = div%num;
    console.log("Total:",(total).toFixed(1)+ "\n" + 'Resto:',resto)
}
divisor(45,10)