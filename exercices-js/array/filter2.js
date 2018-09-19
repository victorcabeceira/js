Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (i=0; i< this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [ 
    { nome: 'notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4499, fragil: true},
    { nome: 'Copo de Vidro', preco: 19.99, fragil: true},
    { nome: 'Copo de Plástico', preco: 24.99, fragil: false},
]

const produtosCaros = e => e.preco >= 500;
const frageis = e => e.fragil;

const carosEFrageis = produtos.filter2(produtosCaros).filter2(frageis)
console.log(carosEFrageis);