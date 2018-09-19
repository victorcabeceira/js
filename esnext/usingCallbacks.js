// without promise
const http = require('http')

const getTurma = (letra,callback) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
  http.get(url, res => {
    let result = ''
    res.on('data', dados => {
      result += dados
    })

    res.on('end', () => {
      callback(JSON.parse(result))
    })
  })
}

// callback hell
let names = []
getTurma('A', students => {
  names = names.concat(students.map(s => `A: ${s.nome}`))
  console.log(names)
  getTurma('B', students => {
    names = names.concat(students.map(s => `B: ${s.nome}`))
    console.log(names)
    getTurma('C', students => {
      names = names.concat(students.map(s => `C: ${s.nome}`))
      console.log(names)

    })
  })
})