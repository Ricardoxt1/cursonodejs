// modulos externos

const chalk = require('chalk')
const inquirer = require('inquirer')

// modulos internos - cor modules

const fs = require('fs')
const { constant, functionsIn } = require('lodash')

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
            getAccountBalance()
        } else if (action === 'Depositar') {
            deposit()
        } else if (action === 'Sacar') {
            withdraw()
        } else if (action === 'Sair') {
            console.log(chalk.bgBlue.black('Obrigado por utilizar o banco Account, volte sempre!'))
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

        console.log(grchalk.een('Parabéns, sua conta foi criada!'))
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
    ])
        .then((anwser) => {
            const accountName = anwser['accountName'];

            // verify if account exists
            if(!checkAccount(accountName)) {
                return deposit()
            }

            inquirer.prompt([
                {
                    name: 'amount',   //amount significa valor
                    message: 'Qual valor pretende depositar?'
                }
            ]).then((anwser) => {

                const amount = anwser['amount'];

                addAmount(accountName, amount)
                operation()

            })
            .catch((err) => console.log(err)) 
        })
        .catch(err => console.log(err))  
}


function checkAccount(accountName){
    if(!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black('Esta conta não existe, escolha outro nome ou crie uma conta!'))
        return false
    }

    return true
}

function addAmount(accountName, amount) {

    const accountData = getAccount(accountName)
    
    if(!amount){
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'))
        return deposit()  
    }

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (erro) {
            console.log(erro)
        },
    )

    console.log(chalk.green(`Olá ${accountName}, foi depositado o valor de R$${amount} na sua conta!`))
}

function getAccount(accountName) {
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf8',
        flag: 'r'
    })

    return JSON.parse(accountJSON)
}

// show accountDataBalance

function getAccountBalance() {
    inquirer.prompt ([
        {
            name: 'accountName',
            message: 'Qual nome da sua conta?',
        },
    ])
    .then((answer) => {

        const accountName = answer['accountName']

        //verify accountName

        if(!checkAccount(accountName)) {
            return getAccountBalance() 
        }

        const accountData = getAccount(accountName)

        console.log(chalk.bgBlue.black(`Olá, o saldo da sua conta é de R$${accountData.balance}`)),

        operation()

    }).catch(erro => console.log(erro))
}

// withdraw an amount from user account
function withdraw (){

    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ]).then((anwser) => {

        const accountName = anwser['accountName']

        if(!checkAccount(accountName)) {
            withdraw()
        }

        inquirer.prompt([
            {
                name: 'amount',
                message: 'Quantos você deseja sacar?'
            }
        ]).then((anwser) => {

            const amount = anwser['amount']

            removeAmount(accountName, amount)
            
        }).catch(err => console.log(err))

    }).catch(err => console.log(err))
}

function removeAmount(accountName, amount) {
    const accountData = getAccount(accountName)

    if(!amount) {
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'))
        return withdraw()
    }

    if(accountData.balance < amount){
        console.log(chalk.bgRed.black('Valor indisponível!'))
        return withdraw()
    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err) {
            console.log(err)
        }
    )

    console.log(chalk.green(`Foi realizado um saque no valor de R$${amount} da sua conta!`))
    operation()
}



