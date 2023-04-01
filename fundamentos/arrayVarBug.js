
const func = [];

for(var i=0;i<10;i++){
    func.push(function(){
        console.log(i);
    })
}

func[2]();
func[8]();

/*
Explicação: Ele vai executar o console.log() com o ultimo valor de "i"
por conta dele estar declarado com escopo Global, em tese a cada casa que ele anda
o valor aumenta corretamente, porém isso acontece para todos os indices
então ao final, quando chamamos a casa 2 e 8
eles já estão com o valor total do laço definido...
*/