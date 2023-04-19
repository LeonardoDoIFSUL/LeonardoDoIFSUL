// NODE-SCHEDULE
const schedule = require('node-schedule')
/*
string seta a execução do código para um exemplo específico envolvendo o dia e a hora em que a aula foi gravada, 
que é '/5 * 12 * * 2', o que significa que a função será executada de 5 em 5 segundos, porém apenas durante a hora 12 de uma terça-feira, 
e se você não estiver testando este exemplo em algum momento em que a hora é 12 em uma terça feira, o código não funcionará.

Para resolver esse problema, basta mudar a string de configuração. 
Você pode optar por personalizá-la de acordo com o dia e hora que você está realizando o exercício, ou utilizar a string '/5 * * * * *',
que simplesmente executará o código de 5 em 5 segundos independente de minuto, hora, dia do mês, mês e dia da semana em que você está
testando o algoritmo.
*/

//É ótimo para fazer atualização de banco sasional
const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 2', function(){
    console.log("Acessando o banco de atualizando dados de um parametro... PI PI PI PÓ PÓ PÓ", new Date().getSeconds())
})