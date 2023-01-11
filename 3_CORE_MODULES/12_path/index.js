const path = require('path');

const customPath = '/relatorios/ricardo/relatorio1.pdf'

console.log(path.dirname(customPath)); // nome do caminho 
console.log(path.basename(customPath)); // nome do arquivo
console.log(path.extname(customPath)); // extensão (formato do arquivo)
