const fs = require('fs')

const caminho = __dirname + '/arquivo.json'
// Síncrona 

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrona
fs.readFile(caminho, 'utf-8', (err, content) => {
  if (!err) {
    const config = JSON.parse(content)
    console.log(`${config.db.host}`)
  }
})

const config = require('./arquivo.json')
console.log(config.db)

// pasta
fs.readdir(__dirname, (err, arquivos) => {
  console.log('conteudo da pasta: ', arquivos)
})