const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer(function (req,res) {
    fs.readFile('mensagem.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' }) // leitura do arquivo em html
        res.write(data) //lendo apenas os dados do arquivos e exibindo-o <h1> --- </h1>
        
    })
})

server.listen(port, () => {
    console.log (`Servidor rodando na porta: ${port}`)
})