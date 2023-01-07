const fs = require('fs');

const arqNovo = "arq_renomeado.txt"
const arqAntigo = "arquivo.txt"

fs.rename(arqAntigo, arqNovo, function (err) {

    if(err) {
        console.log(err)
        return
    }

    console.log(`Arquivo ${arqAntigo} sendo renomeado por ${arqNovo}`)
})