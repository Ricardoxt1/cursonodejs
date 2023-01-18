// modulos externos

const chalk = require('chalk')
const inquirer = require('inquirer')

// modulos internos - cor modules

const fs = require('fs')

console.log("iniciamos o Accounts")

operation()

function operation() {

    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'O que você pretende fazer?',
            choices: 
            ['Criar Contas',
            'Consultar Saldo',
            'Depositar',
            'Sacar',
            'Sair']
        },
        
    ])

    // resposta que será dada conforme o desejo do usuario
    .then(anwser => { 
        const action = anwser['action']

        console.log(action)
    }) 
    .catch( err => console.log(err))
}
