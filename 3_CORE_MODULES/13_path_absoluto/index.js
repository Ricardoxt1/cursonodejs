const path = require('path');

// path absoluto
console.log(path.resolve('texte.txt'))

// criando caminho para path 

const midFolder = 'relatorios'
const fileName = 'ricardo.txt'

const finalPath = path.join('/', 'arquivos', midFolder, fileName)

console.log(finalPath)