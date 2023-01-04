const fs = require('fs');

console.log('Inicio')

fs.writeFile('arquivo.txt', 'oi', function (erro) {  //essa função ignora as etapas, dando continuidade ao código e mostrando o resultado do possível erro apenas no final
    setTimeout(function () {
        console.log('Arquivo criado!')
    }, 1000)

})

console.log('Fim') 