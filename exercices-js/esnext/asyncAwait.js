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

// ES8
// Simplify promise usage
let getStudents = async () => {
    const classA = await getTurma('A')
    const classB = await getTurma('B')
    const classC = await getTurma('C')
    return [].concat(classA, classB, classC)
} // returns an asyncFunction object

getStudents()
    .then(students => students.map(s => s.nome))
    .then(name => console.log(name))