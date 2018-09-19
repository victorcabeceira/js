const produtos = [ 
    { nome: 'notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4499, fragil: true},
    { nome: 'Copo de Vidro', preco: 19.99, fragil: true},
    { nome: 'Copo de Plástico', preco: 24.99, fragil: false},
]

console.log(produtos.filter(function(p) {
    return !p.fragil
}))

const produtosCaros = e => e.preco >= 500;
const frageis = e => e.fragil;

const carosEFrageis = produtos.filter(produtosCaros).filter(frageis)
console.log(carosEFrageis);