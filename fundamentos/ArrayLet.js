const func = [];
for(let i=0;i<10;i++){
    func.push(function(){
        console.log(i);
    })
}

func[2]();
func[8]();

/* 
Neste exemplo o escopo é de bloco,
então "i=2" não interfere no "i=8" quando chamamos a função dentro do array |
ver doc arrayVarBug.js 
*/