const fs = require('fs');

fs.stat('pasta', (err,stats) => {
    if (err) {
        console.error(err)
        return
    }

    console.log(stats.isFile()) // Confirmação se é um arquivo
    console.log(stats.isDirectory()) // Diretório (Pasta) ?
    console.log(stats.isSymbolicLink()) // Link simbólico?
    console.log(stats.ctime) // Data q o arquivo foi criado
    console.log(stats.size) // Tamanho do arquivo
})