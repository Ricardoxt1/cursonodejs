const inquirer = require('inquirer');

inquirer.prompt ([
    {
        name: 'p1', 
        message: 'Qual sua primeira nota? ',
    },
    {
        name: 'p2', 
        message: 'Qual sua segunda nota? ',
    },
])
    .then((answers) => {
        console.log(answers)
        const media = (parserInt(answers.p1) + parserInt(answers.p2)) / 2 

        console.log(`A média é: ${media}`)
    })
    .cath((err) => console.log(err))