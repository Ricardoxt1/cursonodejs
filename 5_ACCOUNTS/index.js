// modulos externos

const chalk = require('chalk')
const inquirer = require('inquirer')

// modulos internos - cor modules

const fs = require('fs')

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

        if (action === 'Criar Contas') {
            createAccount()
        }
    }) 
    .catch(err => console.log(err))
}

// create an account

function createAccount() {
    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'))
    console.log(chalk.green('Defina  as opções da sua conta a segur'))
}
