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

        const nameNewLine = name + ',\r\n' //essa const faz com que haja quebra de linha no arquivo

        fs.appendFile('arquivo.txt', nameNewLine, function (err, data) { //o appendFile insera um conteúdo no arquivo e salva, sem substituição
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