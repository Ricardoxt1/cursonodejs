const chalk = require("chalk") // importando file para trabalhar cores em textos

const nota = 9

if(nota >= 7) {
    console.log(chalk.green('Parabéns! Você está aprovado!'))
} else {
    console.log(chalk.bgRed('Você precisa fazer a prova de recuperação!'));
}
    
