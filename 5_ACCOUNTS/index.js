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
        } else if (action === 'Consultar Saldo') {

        } else if (action === 'Depositar') {
            deposit()

        } else if (action === 'Sacar') {

        } else if (action === 'Sair') {
            console.log(chalk.bgBlue.black('Obrigado por utilizar o banco Account, voltei sempre!'))
            process.exit()
        }
    }) 
    .catch(err => console.log(err))
}

// create an account

function createAccount() {
    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'))
    console.log(chalk.green('Defina  as opções da sua conta a segur'))

    buildAccount()
}

function buildAccount(){

    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Digite um nome para sua conta: '
        }
    ]).then(anwser => {    //console.info serve para realizar login pelo nome da conta criada
        const accountName = anwser['accountName'];
        console.info(anwser['accountName']) //login com nome da conta

        // se não existir um diretorio fs criará um com a sequência de if
        if(!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts')
               
        }

        //validação, se houver uma conta com mesmo nome não permitirá seguir
        if(fs.existsSync(`accounts/${accountName}.json`)){
            console.log(chalk.bgRed.black("Esta conta já existe, por favor, crie uma conta com outro nome!"))
            buildAccount() 
            return
        }

        //criação de um arquivo para guardar dados da conta
        fs.writeFileSync(`accounts/${accountName}.json`,
         `{"balance": 0}`,
          function (err) {
            console.log(err)
        })    

        console.log(chalk.green('Parabéns, sua conta foi criada!'))
        operation()
    })
    .catch(err => console.log(err))
}

// add an amount to user account

function deposit(){
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
        .then((anwser) => {
            const accountName = anwser['accountName'];

            // verify if account exists
            if(!checkAccount(accountName)) {
                return deposit()
            }
        })
        .catch(err => console.log(err))
    ])
}


function checkAccount(accountName){
    if(!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black('Esta conta não existe, escolha outro nome ou crie uma conta!'))
        return false
    }

    return true
}