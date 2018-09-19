// Factory = fabrica = retorna objetos
const prod1 = {
  nome: '...',
  preco: 45
}

const prod2 = {
  nome: '....',
  preco: 456
}

// factory simples: R
function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1
  }
}

console.log(criarProduto('teste', 123))