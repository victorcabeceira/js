const pai = { nome: 'Noe', corCabelo: 'preto' }
const filha = Object.create(pai)
filha.nome = 'Loiane'
console.log(filha.corCabelo)


const filho = Object.create(pai, {
  nome: { value: 'Victor', writable: false, enumerable: true }
})

console.log(filho.nome)
filho.nome = 'joao'
console.log(`${filho.nome} tem cabelo de cor ${filho.corCabelo}`)
console.log(Object.keys(filha))
console.log(Object.keys(filho))

for (let key in filho) {
  filho.hasOwnProperty(key) ? 
    console.log('Tem', key) : console.log(`Por herança: ${key}`)
}