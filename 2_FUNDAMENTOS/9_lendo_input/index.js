const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual sua linguagem preferida? ', (linguagem) => {
    if(linguagem === 'Python'){
    console.log('Isso nem é linguagem!')
    } else {
    console.log(`Minha linguagem preferida é: ${linguagem}`)
    readline.close()
    }
})