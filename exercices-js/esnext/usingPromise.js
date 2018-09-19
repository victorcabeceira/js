// Using promise
const http = require('http')

const getTurma = letter => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let result = ''
      res.on('data', dados => {
        result += dados
      })

      res.on('end', () => {
        try {
          resolve(JSON.parse(result))
        } catch (e) {
          reject(e)
        }
      })
    })
  })
}

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
  .then(classes => [].concat(...classes))
  .then(students => students.map(student => student.nome))
  .then(names => console.log(names))
  .catch(e => console.log(e.message))


getTurma('D').catch(e => console.log(e.message))