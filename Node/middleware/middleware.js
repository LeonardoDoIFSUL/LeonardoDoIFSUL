//Middleware pattern (Chain of responsability)

const passo1 = (ctx,next) => { //Passo do tratamento aleatório
    ctx.valor1 = 'mid1' //Objeto ganhou um valor
    next()
}

const passo2 = (ctx,next) => { //Passo do tratamento aleatório
    ctx.valor1 = 'mid2' //Objeto ganhou um novo valor
    next()
}

const passo3 = (ctx,next) => { ctx.valor1 = 'mid3'} //Saida do arquivo tratado depois de passar por todos os tratamentos com next()

const exec = (ctx, ...middleware) => { //os tres pontos é um REST
    const execPasso = indice => {
        middleware && indice < middleware.length &&
        middleware[indice](ctx, () => {execPasso(indice++)})
    }
}

const ctx = {}
exec(ctx, passo1,passo2,passo3)
console.log(ctx)