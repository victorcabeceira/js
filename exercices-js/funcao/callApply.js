function getPreco(imposto = 0, moeda = 'R$'){ 
  return `${moeda} ${this.preco * (1-this.desc) * (1 + imposto)}`
}

const produto = {
  nome: 'Notebook',
  preco: 4500,
  desc: 0.15,
  getPreco
}

global.preco = 2000
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 42000, desc: 0.05 }
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.04, '$')) // primeiro contexto e depois pra outra função dentro
console.log(getPreco.apply(carro, [0.04, '$'])) // primeiro contexto e depois array pra outra função dentro 


