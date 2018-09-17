const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.5 }',
]
const objeto = json => JSON.parse(json)
const precos = produto => produto.preco
const precoAtt = carrinho.map(objeto).map(precos)

console.log(precoAtt)