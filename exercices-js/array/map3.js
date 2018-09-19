Array.prototype.map2 = function (callback) {
    const newArray = []
    for (let i=0; i< this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray;
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.5 }',
]
const objeto = json => JSON.parse(json)
const precos = produto => produto.preco
const precoAtt = carrinho.map2(objeto).map2(precos)

console.log('1', precoAtt)