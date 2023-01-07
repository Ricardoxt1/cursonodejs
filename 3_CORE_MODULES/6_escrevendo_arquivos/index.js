const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer(function (req,res) {

    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name  

    if(!name) {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' }) // leitura do arquivo em html
            res.write(data) //lendo apenas os dados do arquivos e exibindo-o <h1> --- </h1>
            
        })
    } else {
        fs.writeFile('arquivo.txt', name, function (err, data) {
            res.writeHead(302, { //302 é status de redirect 
                Location: '/',
            })
            return res.end()
        })

    }
})

server.listen(port, () => {
    console.log (`Servidor rodando na porta: ${port}`)
})